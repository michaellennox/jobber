from server import db


class Person(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    company_id = db.Column(db.Integer, db.ForeignKey("company.id"))
    job_title = db.Column(db.String(100))
    location = db.Column(db.String(100))
    photo = dbColumn(db.String(100))
    summary = db.Column(db.Text)

    def __init__(self, args):
        self.name = args['name']
        self.company_id = args['company_id']
        self.job_title = args['job_title']
        self.location = args['location']
        self.photo = args['photo']
        self.summary = args['summary']
