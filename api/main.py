import os
from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

flavicon_path: str = os.path.join(os.path.dirname(__file__), "static", "flavicon.ico")
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/flavicon.ico", include_in_schema=False)
async def flavicon() -> FileResponse:
    """Endpoint to serve the favicon."""
    return FileResponse(flavicon_path)


@app.get("/")
def read_root() -> dict[str, str]:
    """Root endpoint that returns a simple greeting."""
    return {"Hello": "World"}


handler = app
