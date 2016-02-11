#################
#### imports ####
#################

from flask import url_for, request
from flask.ext.restful import Resource, fields, marshal
from server import api, db
from server.models.job import Job

from server.controllers.companies import company_fields

################
#### config ####
################

job_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'company': fields.Nested(company_fields)
}

################
#### routes ####
################


class JobsAPI(Resource):
    def get(self, company_id):
        pass

    def post(self, company_id):
        job = Job(
            title=request.json.get('title'),
            company_id=company_id
        )
        db.session.add(job)
        db.session.commit()
        return 'Job created!', 201

class JobAPI(Resource):
    def get(self, company_id, id):
        job = Job.query.get(id)
        return marshal(job, job_fields)

    def put(self, company_id, id):
        pass

    def delete(self, company_id, id):
        pass

api.add_resource(JobsAPI, '/api/companies/<int:company_id>/jobs', endpoint='jobs')
api.add_resource(JobAPI, '/api/companies/<int:company_id>/jobs/<int:id>', endpoint='job')
