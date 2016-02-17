from flask.ext.restful import Resource, reqparse
from server import db
from server.models.note import Note


class NotesResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('description', location='json')
        super().__init__()


class NotesAPI(NotesResource):
    def post(self, application_id):
        args = self.reqparse.parse_args()
        args['application_id'] = application_id
        note = Note(args)
        db.session.add(note)
        db.session.commit()
        return 'Note added!', 201
