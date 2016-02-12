from server import db


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(250))
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))

    def __init__(self, title, company_id):
        self.title = title
        self.company_id = company_id

    def __repr__(self):
        return "<Job {}>".format(self.id)
