from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow 
import uuid
from sqlalchemy.dialects.postgresql import UUID

db = SQLAlchemy()
ma = Marshmallow()

class Messages(db.Model):
    __tablename__ = "messages"
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    text_content = db.Column(db.String, nullable=True)
    image_content = db.Column(db.String, nullable=True)
    audio_content = db.Column(db.String, nullable=True)
    notification_type = db.Column(db.String, nullable=False, default="email")
    notification_data = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())