from flask import Flask, send_from_directory
from models.database import db
import os

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])

from models.companies import Company

db.init_app(app)


@app.route('/')
def serve_client():
    angular_index = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                 "..", "public", "views")
    return send_from_directory(angular_index, 'layout.html')

if __name__ == '__main__':
    app.run(port=8080, debug=True)
