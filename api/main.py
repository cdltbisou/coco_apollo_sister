from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root() -> dict[str, str]:
    """Root endpoint that returns a simple greeting."""
    return {"Hello": "World"}
