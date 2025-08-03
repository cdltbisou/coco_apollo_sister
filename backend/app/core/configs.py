from typing import List
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    PROJECT_NAME: str = "Coco Apollo Sister"
    DESCRIPTION: str = (
        "A FastAPI application for managing and serving data related to Coco Apollo Sister."
    )
    VERSION: str = "1.0.0"
    API: str = "/api"

    # Security
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # CORS
    ALLOWED_HOSTS: List[str] = ["*"]

    class Config:
        env_file = ".venv"


settings: Settings = Settings()
