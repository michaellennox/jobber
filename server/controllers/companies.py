from flask.ext.restful import Resource, fields, marshal, reqparse
from server import db
from server.models.company import Company

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
    'address': fields.String,
    'summary': fields.String,
    'website': fields.String,
    'industry': fields.String,
    'address': fields.String,
    'size': fields.String,
    'logo': fields.String,
    'jobs': fields.List(fields.Nested(job_fields)),
    'people': fields.List(fields.Nested(person_fields))
}


class CompaniesResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('name', location='json')
        self.reqparse.add_argument('summary', location='json')
        self.reqparse.add_argument('website', location='json')
        self.reqparse.add_argument('industry', location='json')
        self.reqparse.add_argument('address', location='json')
        self.reqparse.add_argument('size', location='json')
        self.reqparse.add_argument('logo', location='json')
        super().__init__()


class CompaniesAPI(CompaniesResource):
    def get(self):
        companies = Company.query.all()
        return {'companies': [marshal(company, company_fields) for company in companies]}

    def post(self):
        args = self.reqparse.parse_args()
        company = Company(args)
        db.session.add(company)
        db.session.commit()
        return 'Company Created!', 201


class CompanyAPI(CompaniesResource):
    def get(self, id):
        company = Company.query.get(id)
        return marshal(company, company_fields)

    def put(self, id):
        args = self.reqparse.parse_args()
        company = Company.query.filter_by(id=id)
        company.update(args)
        db.session.commit()
        return marshal(company[0], company_fields)

    def delete(self, id):
        company = Company.query.get(id)
        db.session.delete(company)
        db.session.commit()
        return '', 204
