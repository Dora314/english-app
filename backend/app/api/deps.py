from typing import Generator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from app.models.user import User
from jose import JWTError, jwt
from app.core.config import settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_db() -> Generator:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

async def get_current_user(
    db: Session = Depends(get_db),
    token: str = Depends(oauth2_scheme)
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        # Remove 'Bearer ' prefix if present
        email = token.replace('Bearer ', '')
        print(f"Looking for user with email: {email}")  # Debug log
        
        user = db.query(User).filter(User.email == email).first()
        if not user:
            print(f"No user found with email: {email}")  # Debug log
            # Create user if not found
            user = User(
                email=email,
                name=email.split('@')[0],  # Use part before @ as name
                avatar=None
            )
            db.add(user)
            db.commit()
            db.refresh(user)
            print(f"Created new user: {user.email}")  # Debug log
            
        return user
    except Exception as e:
        print(f"Error in get_current_user: {str(e)}")  # Debug log
        raise credentials_exception 