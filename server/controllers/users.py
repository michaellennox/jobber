from flask.ext.restful import Resource, fields, marshal, reqparse
from flask.ext.security import current_user
from flask.ext.security.utils import encrypt_password
from server import db
from server.models.user import user_datastore


class UsersResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('email', location='json')
        self.reqparse.add_argument('password', location='json')
        self.reqparse.add_argument('first_name', location='json')
        self.reqparse.add_argument('last_name', location='json')
        super().__init__()


class UsersAPI(UsersResource):
    def post(self):
        args = self.reqparse.parse_args()
        print(current_user)
        try:
            user_datastore.create_user(
                email=args['email'],
                password=encrypt_password(args['password']),
                first_name=args['first_name'],
                last_name=args['last_name']
            )
            db.session.commit()
        except Exception as e:
            return str(e), 400
        return 'Account Created!', 201
