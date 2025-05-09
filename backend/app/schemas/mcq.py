from pydantic import BaseModel
from typing import List
from datetime import datetime

class QuestionBase(BaseModel):
    text: str
    options: List[str]
    correct_answer: str
    topic: str

class QuestionCreate(BaseModel):
    question: str
    options: List[str]
    correct_answer: str
    explanation: str

class QuestionResponse(QuestionCreate):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class MCQGenerationRequest(BaseModel):
    topic: str
    num_questions: int 