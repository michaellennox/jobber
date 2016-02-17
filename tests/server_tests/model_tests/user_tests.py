from flask.ext.security.utils import encrypt_password
from server import db
from server.models.user import User, user_datastore
from .helpers import ModelTestCase


class TestUserModel(ModelTestCase):
    def test_authenticate_with_valid_params_returns_user(self):
        user = user_datastore.create_user(
            email='test@example.com',
            password=encrypt_password('example'),
            first_name='Colossus',
            last_name='Zadeh'
        )
        db.session.commit()

        result = User.authenticate(dict(
            email='test@example.com',
            password='example'
        ))

        self.assertEquals(result, user)

    def test_authenticate_with_invalid_params_returns_false(self):
        user_datastore.create_user(
            email='test@example.com',
            password=encrypt_password('example'),
            first_name='Colossus',
            last_name='Zadeh'
        )
        db.session.commit()

        result = User.authenticate(dict(
            email='wrong@example.com',
            password='example'
        ))

        self.assertFalse(result)
