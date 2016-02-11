#################
#### imports ####
#################

from flask import request
from flask.ext.restful import Resource, fields, marshal
from server import api, db
from server.models.company import Company

################
#### config ####
################

job_fields = {
    'id': fields.Integer,
    'title': fields.String
}

person_fields = {
    'id': fields.Integer,
    'name': fields.String,
}

company_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'jobs': fields.List(fields.Nested(job_fields)),
    'people': fields.List(fields.Nested(person_fields))
}

################
#### routes ####
################


class CompaniesAPI(Resource):
    def get(self):
        companies = Company.query.all()
        return {'companies': [marshal(company, company_fields) for company in companies]}

    def post(self):
        company = Company(
            name=request.json.get('name')
        )
        db.session.add(company)
        db.session.commit()
        return 'Company created!', 201


class CompanyAPI(Resource):
    def get(self, id):
        company = Company.query.get(id)
        return marshal(company, company_fields)

    def put(self, id):
        pass

    def delete(self, id):
        pass

api.add_resource(
    CompaniesAPI,
    '/api/companies',
    endpoint='companies'
)
api.add_resource(
    CompanyAPI,
    '/api/companies/<int:id>',
    endpoint='company'
)
