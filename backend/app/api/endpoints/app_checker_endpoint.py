from http.client import HTTPException
from fastapi import APIRouter

router = APIRouter(prefix="/app-checker", tags=["App Checker"])


@router.get("", response_model=str, status_code=200)
async def app_checker() -> str:
    """
    Endpoint to check the health of the application.
    Returns a simple string indicating the app is running.
    """
    try:
        return "App is running"
    except Exception as e:
        raise HTTPException(f"error occurred {str(e)}") from e
