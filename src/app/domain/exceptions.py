class AppException(Exception):
    def __init__(
        self,
        status_code: int = 500,
        code: str = "APP ERROR",
        message: str = "app exception",
        user_message: str = "error on the server, try making the request again",
    ) -> None:
        self.status_code = status_code
        self.code = code
        self.message = message
        self.user_message = user_message
