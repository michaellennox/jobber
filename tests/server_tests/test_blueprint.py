

import os
import flask
import unittest

# from sqlalchemy import create_engine
# engine = create_engine('postgresql:///jobber_dev', echo=True)

import sys
sys.path.append("../../")
import server.app

from models.companies import Company

class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        Company(name='Google')
        self.client = app.app.test_client()

    def tearDown(arg):
        google = Company.query.filter_by(name='Google').first()
        Company.delete(google)
        pass

    def test_get_companies(self):
        r = self.client.get('/api/companies')
        self.assertEqual(r.status_code, 200)

    def test_post_companies(self):
        r = self.client.post('/api/companies')
        self.assertEqual(r.status_code, 200)

    def test_get_company(self):
        r = self.client.get('/api/companies/<name>')
        self.assertEqual(r.status_code, 200)

    def test_companies_has_example(self):
        r = self.client.get('/api/companies')
        self.assertEqual(r, 'Google')
