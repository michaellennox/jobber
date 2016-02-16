from flask.ext.security.utils import encrypt_password
from server import db
from server.models.user import user_datastore
from .helpers import APITestCase, SessionsAPIMixin


class TestSessionsAPI(APITestCase, SessionsAPIMixin):
    def test_valid_POST_returns_success_and_user_object(self):
        user_datastore.create_user(
            email='test@example.com',
            password=encrypt_password('example')
        )
        db.session.commit()

        res = self.POST_sessions()

        self.assert_status(res, 200)
        self.assertEqual(res.json, dict(user='test@example.com'))

    def test_invalid_POST_returns_error_messsage(self):
        user_datastore.create_user(
            email='test@example.com',
            password=encrypt_password('example')
        )
        db.session.commit()

        res = self.POST_sessions(email='landperson@example.com')

        self.assert_status(res, 400)
        self.assertEqual(res.json, str('Invalid username or password'))

    def test_DELETE_returns_success_message(self):
        res = self.DELETE_sessions()

        self.assert_status(res, 200)
        self.assertEqual(res.json, str('Successfully logged out'))
