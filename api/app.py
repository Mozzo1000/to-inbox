from flask import Flask
from flask_cors import CORS
from api.config import Config
from flask_migrate import Migrate
from api.models import db, ma

app = Flask(__name__)
CORS(app)

app.config.from_object(Config)

db.init_app(app)
ma.init_app(app)
migrate = Migrate(app, db)

#app.register_blueprint(books_endpoint)

@app.route("/")
def index():
    return {
        "name": "to-inbox-api",
        "version": "1.0.0"
    }