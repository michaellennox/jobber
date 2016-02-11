#################
#### imports ####
#################

from flask import url_for, request
from flask.ext.restful import Resource, fields, marshal
from server import api, db
from server.models.person import Person

################
#### config ####
################

person_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'company_id': fields.Integer
}

################
#### routes ####
################

class PeopleAPI(Resource):
    def get(self, company_id):
        pass

    def post(self, company_id):
        person = Person(
            name=request.json.get('name'),
            company_id=company_id
        )
        db.session.add(person)
        db.session.commit()
        return 'Person Created!', 201

class PersonAPI(Resource):
    def get(self, company_id, id):
        person = Person.query.get(id)
        return marshal(person, person_fields)

api.add_resource(PeopleAPI, '/api/companies/<int:company_id>/people', endpoint='people')
api.add_resource(PersonAPI, '/api/companies/<int:company_id>/people/<int:id>', endpoint='person')
