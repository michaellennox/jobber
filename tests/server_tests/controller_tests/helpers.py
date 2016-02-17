from flask import json
from flask.ext.testing import TestCase
from flask.ext.security.utils import encrypt_password
from server import app, db
from server.config import TestingConfig
from server.models.user import user_datastore


class APITestCase(TestCase):
    def create_app(self):
        app.config.from_object(TestingConfig)
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()


class AuthMixin(object):
    def login_test_user(self):
        user_datastore.create_user(
            email='test@example.com',
            password=encrypt_password('example')
        )
        db.session.commit()
        self.client.post(
            '/api/sessions',
            content_type='application/json',
            data=json.dumps(dict(
                email='test@example.com',
                password='example'
            ))
        )


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
        req = self.client.get(
            '/api/companies/{}'.format(company_id)
        )
        return req

    def PUT_company(self, company_id, name='MehFirm'):
        req = self.client.put(
            "/api/companies/{}".format(company_id),
            content_type='application/json',
            data=json.dumps(dict(name=name))
        )
        return req

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


class JobAPIMixin(object):
    def GET_job(self, company_id, id):
        req = self.client.get(
            '/api/companies/{}/jobs/{}'.format(company_id, id)
        )
        return req

    def PUT_job(self, company_id, id, title='OtherTitle'):
        req = self.client.put(
            "/api/companies/{}/jobs/{}".format(company_id, id),
            content_type='application/json',
            data=json.dumps(dict(title=title))
        )
        return req

    def DELETE_job(self, company_id, id):
        req = self.client.delete(
            "/api/companies/{}/jobs/{}".format(company_id, id)
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

    def PUT_person(self, company_id, id, name='ManPerson'):
        req = self.client.put(
            "/api/companies/{}/people/{}".format(company_id, id),
            content_type='application/json',
            data=json.dumps(dict(name=name))
        )
        return req

    def DELETE_person(self, company_id, id):
        req = self.client.delete(
            "/api/companies/{}/people/{}".format(company_id, id)
        )
        return req


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


class ApplicationsAPIMixin(object):
    def POST_applications(self, company_id):
        req = self.client.post(
            '/api/applications',
            content_type='application/json',
            data=json.dumps(dict(
                company_id=company_id
            ))
        )
        return req


class EventsAPIMixin(object):
    def POST_events(self, application_id, title='DoneEpic',
                    description='doing things epicly',
                    nature='outgoing'):
        req = self.client.post(
            '/api/applications/{}/events'.format(application_id),
            content_type='application/json',
            data=json.dumps(dict(
                title=title,
                description=description,
                nature=nature
            ))
        )
        return req


class NotesAPIMixin(object):
    def POST_notes(self, application_id, description='this is an note test'):
        req = self.client.post(
            '/api/applications/{}/notes'.format(application_id),
            content_type='application/json',
            data=json.dumps(dict(description=description))
        )
        return req
