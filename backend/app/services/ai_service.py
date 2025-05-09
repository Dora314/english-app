from typing import List, Dict
from app.core.agent import MCQGenerationAgent
from app.schemas.mcq import QuestionCreate
from app.models.user import User
from app.models.mcq import UserWrongdoingQuestion
from sqlalchemy.orm import Session

class AIService:
    def __init__(self):
        self.agent = MCQGenerationAgent()

    async def generate_personalized_questions(
        self,
        db: Session,
        user: User,
        topic: str,
        num_questions: int
    ) -> List[QuestionCreate]:
        # Generate questions
        questions = await self.agent.generate_mcqs(
            topic=topic,
            num_questions=num_questions
        )
        return questions

    async def analyze_user_performance(
        self,
        db: Session,
        user: User
    ) -> Dict:
        # TODO: Implement user performance analysis
        # This could include:
        # - Topic-wise performance
        # - Common mistakes
        # - Learning progress
        return {}

    def generate_mcqs(self, topic: str, num_questions: int) -> List[Dict]:
        return self.agent.generate_mcqs(topic, num_questions)
    
    def personalize_questions(self, questions: List[Dict], user_performance: Dict) -> List[Dict]:
        return self.agent.personalize_questions(questions, user_performance) 