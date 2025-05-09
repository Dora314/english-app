from sqlalchemy.orm import Session
from app.models.user import User
from fastapi import HTTPException

class UserService:
    def __init__(self, db: Session):
        self.db = db

    async def get_user(self, user_id: int):
        user = self.db.query(User).filter(User.id == user_id).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
