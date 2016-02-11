from server import db


class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return "<Person {}>".format(self.id)
