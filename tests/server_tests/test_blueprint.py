import os
import flask
import unittest
import sys
sys.path.append("../server")
import app

class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        self.client = app.app.test_client()

    def test_get_companies(self):
        r = self.client.get('/companies')
        self.assertEqual(r.status_code, 200)

    def test_post_companies(self):
        r = self.client.post('/companies')
        self.assertEqual(r.status_code, 200)

    def test_get_company(self):
        r = self.client.get('/companies/:name')
        self.assertEqual(r.status_code, 200)
