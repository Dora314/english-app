from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from app.models.gemma import GemmaModel

router = APIRouter()

class MCQRequest(BaseModel):
    amount: int
    topic: str
    type: str = "mcq"  # Default to MCQ type

class MCQResponse(BaseModel):
    questions: List[dict]

@router.post("/generate", response_model=MCQResponse)
async def generate_mcqs(request: MCQRequest):
    try:
        if request.type != "mcq":
            raise HTTPException(status_code=400, detail="Only MCQ type is supported")
        
        if request.amount < 1 or request.amount > 10:
            raise HTTPException(status_code=400, detail="Amount must be between 1 and 10")
        
        # Initialize the Gemma model
        model = GemmaModel()
        
        # Generate questions
        questions = model.generate_mcqs(request.topic, request.amount)
        
        if not questions:
            raise HTTPException(status_code=500, detail="Failed to generate questions")
        
        return MCQResponse(questions=questions)
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))