from server import db


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))
    salary = db.Column(db.Integer)
    location = db.Column(db.String)
    summary = db.Column(db.String)
    perks = db.Column(db.String)

    def __init__(self, args):
        self.title = args['title']
        self.company_id = args['company_id']
