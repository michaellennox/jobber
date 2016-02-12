from flask import json
from flask.ext.testing import TestCase
from server import app, db
from server.config import TestingConfig
from server.models.company import Company


class TestCompaniesAPI(TestCase):

    def create_app(self):
        app.config.from_object(TestingConfig)
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def GET_companies(self):
        return self.client.get("/api/companies")

    def POST_companies(self, name='ACMECorp'):
        return self.client.post(
            "/api/companies",
            content_type='application/json',
            data=json.dumps(dict(name=name))
        )

    def test_GET_returns_companies_as_json(self):
        res = self.GET_companies()
        self.assert_status(res, 200)
        self.assertEquals(res.json, dict(companies=[]))

    def test_POST_returns_success_message(self):
        res = self.POST_companies()
        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Company Created!'))

    def test_POST_saves_to_database(self):
        self.POST_companies()
        company = Company.query.first()
        self.assertEqual(Company.query.count(), 1)
        self.assertEqual(company.name, 'ACMECorp')


class TestCompanyAPI(TestCase):

    def create_app(self):
        app.config.from_object(TestingConfig)
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()

    def GET_company(self, company_id):
        return self.client.get("/api/companies/" + company_id)

    def test_GET_returns_company_as_json(self):
        company = Company(name='ACMECorp')
        db.session.add(company)
        db.session.commit()
        res = self.GET_company('1')
        self.assertEquals(res.json.get('name'), 'ACMECorp')
