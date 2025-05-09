from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "English MCQ Platform"
    CORS_ORIGINS: list = ["http://localhost:3000"]
    DATABASE_URL: str = "postgresql://postgres:admin@localhost:5432/english_app"
    HF_TOKEN: str
    SECRET_KEY: str = "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"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # AI Settings
    GOOGLE_CLOUD_PROJECT: str = "your-project-id"
    GOOGLE_CLOUD_LOCATION: str = "us-central1"
    GEMMA_MODEL_PATH: str = "google/gemma-1b-it-qat"
    
    class Config:
        env_file = ".env"
        case_sensitive = True  # This ensures exact matching with .env variables

settings = Settings() 