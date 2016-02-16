from flask.ext.restful import Resource, reqparse
from flask.ext.security import login_user, logout_user
from server.models.user import User


class SessionsResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('email', location='json')
        self.reqparse.add_argument('password', location='json')
        super().__init__()


class SessionsAPI(SessionsResource):
    def post(self):
        args = self.reqparse.parse_args()
        user = User.authenticate(args)
        if user:
            login_user(user)
            return dict(user=user.name()), 200
        return 'Invalid username or password', 400

    def delete(self):
        logout_user()
        return 'Successfully logged out', 200
