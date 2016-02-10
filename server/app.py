from flask import Flask, send_from_directory, jsonify
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
    return send_from_directory(angular_index, 'index.html')

@app.route('/api/companies')
def get_companies():
    companies = Company.query.all()
    list = []
    for company in companies:
        list.append([
        {'param': 'id', 'val': company.id},
        {'param': 'name', 'val': company.name}
        ])
    return jsonify(companies=list)

@app.route('/api/companies/:name')
def get_specific_company():
    return "Test Message"

@app.route('/api/companies', methods = ['POST'])
def post_companies():
    return "Test Message"

if __name__ == '__main__':
    app.run(port=8080, debug=True)
