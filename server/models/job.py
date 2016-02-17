from server import db


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))

    def __init__(self, args):
        self.title = args['title']
        self.company_id = args['company_id']
