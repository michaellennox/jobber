import datetime
from server import db


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80))
    description = db.Column(db.Text)
    nature = db.Column(db.String(40))
    date = db.Column(db.DateTime)
    application_id = db.Column(db.Integer, db.ForeignKey('application.id'))

    def __init__(self, args):
        self.title = args['title']
        self.description = args['description']
        self.nature = args['nature']
        self.application_id = args['application_id']
        self.date = args['date'] or datetime.datetime.now()
