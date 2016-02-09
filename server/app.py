from flask import Flask, send_from_directory
from models.database import db
# from blueprints.companies_blueprint import companies_page
import os

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
# app.register_blueprint(companies_page, url_prefix='/companies')


from models.companies import Company

db.init_app(app)


@app.route('/')
def serve_client():
    angular_index = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                 "..", "public", "views")
    return send_from_directory(angular_index, 'index.html')

@app.route('/companies')
def get_companies():
    companies = Company.query.filter_by(name='Google').first()
    return companies.name
    # for company in companies:
    #     print (company.name)

@app.route('/companies/:name')
def get_specific_company():
    return "Test Message"

@app.route('/companies', methods = ['POST'])
def post_companies():
    return "Test Message"

if __name__ == '__main__':
    app.run(port=8080, debug=True)
