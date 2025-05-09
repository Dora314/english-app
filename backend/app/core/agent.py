from typing import List, Dict
from app.models.gemma import GemmaModel
from app.schemas.mcq import QuestionCreate
from app.models.user import User
from app.models.mcq import UserWrongdoingQuestion
from sqlalchemy.orm import Session

class MCQGenerationAgent:
    def __init__(self):
        # Initialize Gemma model
        self.model = GemmaModel()
    
    def generate_mcqs(self, topic: str, num_questions: int) -> List[Dict]:
        return self.model.generate_mcqs(topic, num_questions)

    def _parse_simple_format(self, response: str) -> List[Dict]:
        """Parse the simpler question format"""
        questions = []
        current_q = {}
        lines = response.split('\n')
        
        for line in lines:
            line = line.strip()
            if line.startswith('Q:'):
                if current_q:
                    questions.append(current_q)
                current_q = {
                    "question": line[2:].strip(),
                    "options": [],
                    "correct_answer": "",
                    "explanation": ""
                }
            elif line.startswith(('A)', 'B)', 'C)', 'D)')):
                current_q["options"].append(line[2:].strip())
            elif line.startswith('Correct:'):
                current_q["correct_answer"] = line[8:].strip()
            elif line.startswith('Explanation:'):
                current_q["explanation"] = line[12:].strip()
        
        if current_q:
            questions.append(current_q)
        
        return questions

    async def personalize_questions(
        self, 
        questions: List[QuestionCreate], 
        user_id: int,
        db: Session
    ) -> List[QuestionCreate]:
        """
        Personalize questions based on user's learning history
        """
        # Get user's wrong answers
        wrong_answers = db.query(UserWrongdoingQuestion).filter(
            UserWrongdoingQuestion.user_id == user_id
        ).all()

        # Analyze wrong answers to identify weak areas
        weak_topics = self._analyze_weak_areas(wrong_answers)
        
        # Adjust question difficulty based on user's performance
        personalized_questions = []
        for question in questions:
            # If topic is a weak area, ensure question is at appropriate difficulty
            if question.topic in weak_topics:
                # Adjust question difficulty if needed
                pass
            personalized_questions.append(question)
        
        return personalized_questions

    def _analyze_weak_areas(self, wrong_answers: List[UserWrongdoingQuestion]) -> List[str]:
        # Count wrong answers by topic
        topic_counts = {}
        for answer in wrong_answers:
            topic = answer.question.topic
            topic_counts[topic] = topic_counts.get(topic, 0) + 1
        
        # Return topics with high error rates
        return [topic for topic, count in topic_counts.items() if count >= 3]