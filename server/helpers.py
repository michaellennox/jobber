from flask import Flask, send_from_directory, jsonify, request

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


from models.database import db
from models.companies import Company

import os

Base = declarative_base()
engine = create_engine('postgresql:///jobber_dev')
session = sessionmaker()
session.configure(bind=engine)
Base.metadata.create_all(engine)

app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
db.init_app(app)

def display_companies():
    companies = Company.query.all()
    list = []
    for company in companies:
        list.append([
        {'id': company.id, 'name': company.name}
        ])
    return jsonify(companies=list)

def display_specific_company(name):
    company = Company.query.filter_by(name=name).first()
    list = [
    {'id': company.id, 'name': company.name}
    ]
    return jsonify(company=list)

def create_company():
    name = request.args.get('name')
    if name:
        new_company = session()
        company = Company(name=name)
        new_company.add(company)
        new_company.commit()
        return jsonify(message='Company created')
    else:
        return jsonify(message='No')
