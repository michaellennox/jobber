from server import db


class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String())
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))

    def __init__(self, name, company_id):
        self.name = name
        self.company_id = company_id

    def __repr__(self):
        return "<Person {}>".format(self.id)
