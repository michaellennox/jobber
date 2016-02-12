#################
#### imports ####
#################

from flask.ext.restful import Resource, fields, marshal, reqparse
from server import api, db
from server.models.job import Job

################
#### config ####
################

company_fields = {
    'id': fields.Integer,
    'name': fields.String,
}

job_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'company': fields.Nested(company_fields)
}


class JobsResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('title', location='json')
        super().__init__()

#####################
#### controllers ####
#####################


class JobsAPI(JobsResource):
    def get(self, company_id):
        pass

    def post(self, company_id):
        args = self.reqparse.parse_args()
        args['company_id'] = company_id
        job = Job(args)
        db.session.add(job)
        db.session.commit()
        return 'Job Created!', 201


class JobAPI(JobsResource):
    def get(self, company_id, id):
        job = Job.query.get(id)
        return marshal(job, job_fields)

    def put(self, company_id, id):
        pass

    def delete(self, company_id, id):
        pass

api.add_resource(
    JobsAPI,
    '/api/companies/<int:company_id>/jobs',
    endpoint='jobs'
)
api.add_resource(
    JobAPI,
    '/api/companies/<int:company_id>/jobs/<int:id>',
    endpoint='job'
)
