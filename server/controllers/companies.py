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
    'jobs': fields.List(fields.Nested(job_fields)),
    'people': fields.List(fields.Nested(person_fields))
}


class CompaniesResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('name', location='json')
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
<<<<<<< HEAD
        pass
=======
         company = Company.query.get(id)
         db.session.delete(company)
         db.session.commit()
         return '', 204







>>>>>>> f689c7b0ffc63e0974643e223bf3a18b5c8c1c8f
