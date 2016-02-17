from server import db, app
from flask.ext.security import Security, SQLAlchemyUserDatastore, UserMixin, RoleMixin
from flask.ext.security.utils import verify_password


roles_users = db.Table(
    'roles_users',
    db.Column('user_id', db.Integer(), db.ForeignKey('user.id')),
    db.Column('role_id', db.Integer(), db.ForeignKey('role.id'))
)


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    active = db.Column(db.Boolean())
    confirmed_at = db.Column(db.DateTime())
    roles = db.relationship('Role', secondary=roles_users)
    applications = db.relationship('Application', backref='user')

    @classmethod
    def authenticate(cls, args):
        user = User.query.filter_by(email=args['email']).first()
        if user and verify_password(args['password'], user.password):
            return user
        return False

    def name(self):
        return '{} {}'.format(self.first_name, self.last_name)


class Role(db.Model, RoleMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)
