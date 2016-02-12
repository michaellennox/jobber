from flask import json
from flask.ext.testing import TestCase
from server import app, db
from server.config import TestingConfig


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
            data=json.dumps({'name': name})
        )

    def test_GET_returns_companies_as_json(self):
        res = self.GET_companies()
        self.assert_status(res, 200)
        self.assertEquals(res.json, dict(companies=[]))

    def test_POST_returns_success_message(self):
        res = self.POST_companies()
        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Company Created!'))
