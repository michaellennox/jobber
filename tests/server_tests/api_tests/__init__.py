#################
#### imports ####
#################

from flask import json
from flask.ext.testing import TestCase

from server import app, db
from server.config import TestingConfig

#########################
#### TestCase config ####
#########################


class APITestCase(TestCase):
    def create_app(self):
        app.config.from_object(TestingConfig)
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

########################
#### request mixins ####
########################


class CompaniesAPIMixin(object):
    def GET_companies(self):
        req = self.client.get('/api/companies')
        return req

    def POST_companies(self, name='ACMECorp'):
        req = self.client.post(
            '/api/companies',
            content_type='application/json',
            data=json.dumps(dict(name=name))
        )
        return req


class CompanyAPIMixin(object):
    def GET_company(self, company_id):
        return self.client.get("/api/companies/" + company_id)


class JobsAPIMixin(object):
    def POST_jobs(self, company_id, title='Job Title'):
        req = self.client.post(
            '/api/companies/{}/jobs'.format(company_id),
            content_type='application/json',
            data=json.dumps(dict(title=title))
        )
        return req


class JobAPIMixin(object):
    def GET_job(self, company_id, id):
        req = self.client.get(
            '/api/companies/{}/jobs/{}'.format(company_id, id)
        )
        return req


class PeopleAPIMixin(object):
    def POST_people(self, company_id, name='Mat'):
        req = self.client.post(
            '/api/companies/{}/people'.format(company_id),
            content_type='application/json',
            data=json.dumps(dict(name=name))
        )
        return req


class PersonAPIMixin(object):
    def GET_person(self, company_id, id):
        req = self.client.get(
            '/api/companies/{}/people/{}'.format(company_id, id)
        )
        return req
