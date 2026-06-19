from fastapi.templating import Jinja2Templates

from app.shop.backend.settings.paths import TEMPLATE_DIR


templates = Jinja2Templates(directory=TEMPLATE_DIR)
