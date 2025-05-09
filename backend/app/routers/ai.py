from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..models.gemma import GemmaModel

router = APIRouter()
model = GemmaModel()

class GenerateRequest(BaseModel):
    prompt: str
    max_tokens: int = 512

@router.post("/generate")
async def generate_text(request: GenerateRequest):
    try:
        response = model.generate(request.prompt, request.max_tokens)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
