from server import db


class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    people = db.relationship('Person', backref='company')
    jobs = db.relationship('Job', backref='company')
    applications = db.relationship('Application', backref='company')

    def __init__(self, args):
        self.name = args['name']
