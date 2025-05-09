from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, users, mcqs, ai
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Explicitly set the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]  # Add this line
)

# Include routers
app.include_router(auth.router)
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(mcqs.router, prefix="/api/mcqs", tags=["mcqs"])
app.include_router(ai.router, prefix="/ai", tags=["ai"])