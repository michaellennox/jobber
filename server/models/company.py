from server import db


class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    people = db.relationship("Person", backref="company")

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Company {}>'.format(self.id)
