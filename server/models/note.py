from server import db


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(250))
    application_id = db.Column(db.Integer, db.ForeignKey('application.id'))

    def __init__(self, args):
        self.description = args['description']
        self.application_id = args['application_id']

    def __repr__(self):
        return '<Note {}>'.format(self.id)