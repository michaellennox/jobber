from flask import json
from flask.ext.testing import TestCase
from server import app, db
from server.config import TestingConfig


class APITestCase(TestCase):
    def create_app(self):
        app.config.from_object(TestingConfig)
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()


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

    def DELETE_company(self, company_id):
        return self.client.delete("/api/companies/" + company_id)

class JobsAPIMixin(object):
    def POST_jobs(self, company_id, title='Job Title'):
        req = self.client.post(
            '/api/companies/{}/jobs'.format(company_id),
            content_type='application/json',
            data=json.dumps(dict(title=title))
        )
        return req

    def make_company(self, name="ACMECorp"):
        company = Company(dict(name=name))
        db.session.add(company)
        db.session.commit()
        return company


class JobAPIMixin(object):
    def GET_job(self, company_id, id):
        req = self.client.get(
            '/api/companies/{}/jobs/{}'.format(company_id, id)
        )
        return req

    def DELETE_job(self, company_id, id):
        return self.client.delete("/api/companies/{}/jobs/{}".format(company_id, id)
          )


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

    def DELETE_person(self, company_id, id):
        return self.client.delete("/api/companies/{}/people/{}".format(company_id, id)
          )

class UsersAPIMixin(object):
    def POST_users(
        self,
        email='test@example.com',
        password='example',
        first_name='Example',
        last_name='Person'
    ):
        req = self.client.post(
            '/api/users',
            content_type='application/json',
            data=json.dumps(dict(
                email=email,
                password=password,
                first_name=first_name,
                last_name=last_name
            ))
        )
        return req


class SessionsAPIMixin(object):
    def POST_sessions(self, email='test@example.com', password='example'):
        req = self.client.post(
            '/api/sessions',
            content_type='application/json',
            data=json.dumps(dict(
                email=email,
                password=password
            ))
        )
        return req

    def DELETE_sessions(self):
        req = self.client.delete('/api/sessions')
        return req
