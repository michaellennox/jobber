from flask.ext.restful import Resource, fields, marshal, reqparse
from server import db
from server.models.person import Person

company_fields = {
    'id': fields.Integer,
    'name': fields.String,
}

person_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'company': fields.Nested(company_fields),
    'job_title': fields.String,
    'location': fields.String,
    'photo': fields.String,
    'summary': fields.String,
}


class PeopleResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('name', location='json')
        self.reqparse.add_argument('job_title', location='json')
        self.reqparse.add_argument('location', location='json')
        self.reqparse.add_argument('photo', location='json')
        self.reqparse.add_argument('summary', location='json')
        super().__init__()


class PeopleAPI(PeopleResource):
    def post(self, company_id):
        args = self.reqparse.parse_args()
        args['company_id'] = company_id
        person = Person(args)
        db.session.add(person)
        db.session.commit()
        return 'Person Created!', 201


class PersonAPI(PeopleResource):
    def get(self, company_id, id):
        person = Person.query.get(id)
        return marshal(person, person_fields)

    def put(self, company_id, id):
        args = self.reqparse.parse_args()
        args['company_id'] = company_id
        person = Person.query.filter_by(id=id)
        person.update(args)
        db.session.commit()
        return marshal(person[0], person_fields)

    def delete(Self, company_id, id):
        person = Person.query.get(id)
        db.session.delete(person)
        db.session.commit()
        return '', 204
