from flask import Flask, send_from_directory, jsonify, request
from models.database import db
from sqlalchemy.ext.declarative import declarative_base
import os

Base = declarative_base()

from sqlalchemy import create_engine
engine = create_engine('postgresql:///jobber_dev')

from sqlalchemy.orm import sessionmaker
session = sessionmaker()

session.configure(bind=engine)

Base.metadata.create_all(engine)

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

@app.route('/api/companies/<name>')
def get_specific_company(name):
    get_company = session()
    company = get_company.query(Company).filter(Company.name == name).one()
    list = [
    {'param': 'id', 'val': company.id},
    {'param': 'name', 'val': company.name}
    ]
    return jsonify(company=list)

@app.route('/api/companies/new', methods = ['POST'])
def post_companies():
    name = request.args.get('name')
    if name:
        new_company = session()
        company = Company(name=name)
        new_company.add(company)
        new_company.commit()
        return jsonify(message='Company created')
    else:
        return jsonify(message='No')

if __name__ == '__main__':
    app.run(port=8080, debug=True)
