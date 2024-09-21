from flask import Blueprint, request, jsonify
from api.models import Books, BooksSchema, NotesSchema, Notes
from api.decorators import required_params

messages_endpoint = Blueprint('messages', __name__)

@required_params("notification_type", "notification_data")
@messages_endpoint.route("/v1/messages", methods=["POST"])
def add_message():
    text_content = None
    if "text_content" in request.json:
        text_content = request.json["text_content"]
    
    image_content = None
    if "image_content" in request.json:
        image_content = request.json["image_content"]
    
    audio_content = None
    if "audio_content" in request.json:
        audio_content = request.json["audio_content"]
    
    new_message = Books(text_content=text_content, image_content=image_content, audio_content=audio_content, notification_type=request.json["notification_type"], notification_data=request.json["notification_data"])
    new_message.save_to_db()
    return jsonify({'message': 'Message created.'}), 200