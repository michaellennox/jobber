from server import db


class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_active = db.Column(db.Boolean)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    events = db.relationship('Event', backref='application')
    nptes = db.relationship('Note', backref='application')

    def __init__(self, args):
        self.is_active = True
        self.user_id = args['user_id']
        self.company_id = args['company_id']
