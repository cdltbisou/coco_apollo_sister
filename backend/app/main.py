from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.routes import routers
from app.core import configs

app = FastAPI(
    title=configs.settings.PROJECT_NAME,
    description=configs.settings.DESCRIPTION,
    version=configs.settings.VERSION,
    openapi_url=f"{configs.settings.API}/openapi.json",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=configs.settings.ALLOWED_HOSTS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router=routers, prefix=configs.settings.API)
