from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.services.ai_service import AIService
from app.schemas.mcq import QuestionCreate, QuestionResponse, MCQGenerationRequest
from app.api.deps import get_db, get_current_user
from app.models.user import User
from datetime import datetime

router = APIRouter()
ai_service = AIService()

@router.post("/generate", response_model=List[QuestionResponse])
async def generate_questions(
    request: MCQGenerationRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:
        # Generate questions
        questions = await ai_service.generate_personalized_questions(
            db=db,
            user=current_user,
            topic=request.topic,
            num_questions=request.num_questions
        )
        
        # Add required fields
        formatted_questions = []
        for i, q in enumerate(questions):
            formatted_q = {
                "id": i + 1,  # Temporary ID
                "created_at": datetime.utcnow(),
                "question": q["question"],
                "options": q["options"],
                "correct_answer": q["correct_answer"],
                "explanation": q["explanation"]
            }
            formatted_questions.append(formatted_q)
        
        return formatted_questions
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/answer")
async def submit_answer(
    question_id: int,
    selected_answer: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:
        # TODO: Implement answer submission and scoring
        return {"is_correct": True, "points": 10}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/generate", response_model=List[QuestionResponse])
async def generate_mcqs(topic: str, num_questions: int = 5):
    try:
        questions = ai_service.generate_mcqs(topic, num_questions)
        return questions
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 