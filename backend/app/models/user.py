from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from app.db.base_class import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    avatar = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    answers = relationship("UserAnswer", back_populates="user")
    wrong_answers = relationship("UserWrongdoingQuestion", back_populates="user") 