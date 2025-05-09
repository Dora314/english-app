from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_db
from app.schemas.user import UserCreate, UserLogin
from app.services.auth_service import AuthService
from app.models.user import User
from pydantic import BaseModel

router = APIRouter(tags=["authentication"])

class GoogleLoginRequest(BaseModel):
    email: str
    name: str

@router.post("/register")
async def register(user_data: UserCreate, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    return await auth_service.register_user(user_data)

@router.post("/login")
async def login(user_data: UserLogin, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    return await auth_service.login_user(user_data)

@router.post("/auth/google-login")
async def google_login(request: GoogleLoginRequest, db: Session = Depends(get_db)):
    # Check if user exists
    user = db.query(User).filter(User.email == request.email).first()
    if not user:
        # Create new user
        user = User(
            email=request.email,
            name=request.name,
            avatar=None  # You can add avatar URL if needed
        )
        db.add(user)
        db.commit()
        db.refresh(user)
    return {"message": "User created/updated successfully", "user": {"email": user.email, "name": user.name}}
