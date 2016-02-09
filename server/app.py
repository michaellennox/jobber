from flask import Flask, send_from_directory
import os

app = Flask(__name__)
angular_index = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "views")


@app.route('/')
def serve_client():
    return send_from_directory(angular_index, 'index.html')

if __name__ == '__main__':
    app.run(port=8080, debug=True)
