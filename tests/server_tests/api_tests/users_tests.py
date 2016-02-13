from server.models.user import User
from .helpers import APITestCase, UsersAPIMixin

class TestUsersAPI(APITestCase, UsersAPIMixin):
    def test_valid_POST_returns_success_message(self):
        res = self.POST_users()

        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Account Created!'))

    def test_valid_POST_saves_to_database(self):
        res = self.POST_users(first_name='Jack')

        user = User.query.first()

        self.assertEqual(User.query.count(), 1)
        self.assertEqual(user.first_name, 'Jack')
