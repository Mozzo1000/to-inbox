import os

class Config:
    CSRF_ENABLED = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "postgresql://admin:password@localhost/to-inbox")