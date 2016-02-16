from server import db


class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))

    def __init__(self, args):
        self.name = args['name']
        self.company_id = args['company_id']
