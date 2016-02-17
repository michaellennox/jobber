import os

from flask import Flask, send_from_directory
from flask.ext.restful import Api
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__, static_folder='../public')
app.config.from_object('server.' + os.environ['APP_SETTINGS'])

api = Api(app)
db = SQLAlchemy(app)

import server.routes

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_client(path):
    angular = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "..", "public", "views")
    return send_from_directory(angular, 'layout.html')
