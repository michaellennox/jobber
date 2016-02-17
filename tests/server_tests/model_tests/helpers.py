from flask.ext.testing import TestCase
from server import app, db
from server.config import TestingConfig
from server.models.user import user_datastore


class ModelTestCase(TestCase):
    def create_app(self):
        app.config.from_object(TestingConfig)
        return app

    def setUp(self):
        db.create_all()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
