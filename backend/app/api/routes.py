from fastapi import APIRouter

from app.api.endpoints.app_checker_endpoint import router as app_checker_router

routers = APIRouter()
routers_list = [app_checker_router]

for router in routers_list:
    routers.include_router(router)
