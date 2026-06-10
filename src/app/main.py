import uvicorn

from app.settings.app import app_setting
from app.shop.backend.core.create import create_app

app = create_app()


def run() -> None:
    uvicorn.run(
        app=app_setting.APP,
        host=app_setting.HOST,
        port=app_setting.PORT,
        reload=app_setting.RELOAD,
    )
