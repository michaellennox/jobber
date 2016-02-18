from server import db


class Company(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    summary = db.Column(db.Text)
    website = db.Column(db.String(80))
    industry = db.Column(db.String(80))
    address = db.Column(db.String(80))
    size = db.Column(db.String(50))
    logo = db.Column(db.String(100))
    people = db.relationship('Person', backref='company')
    jobs = db.relationship('Job', backref='company')
    applications = db.relationship('Application', backref='company')

    def __init__(self, args):
        self.name = args['name']
        self.summary = args['summary']
        self.website = args['website']
        self.industry = args['industry']
        self.address = args['address']
        self.size = args['size']
        self.logo = args['logo']
