from flask.ext.restful import Resource, fields, marshal, reqparse
from server import db
from server.models.note import Note


class NotesResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.add_argument('description', location='json')
        super().__init__()


class NotesAPI(NotesResource):
    def post(self, application_id):
        args = self.reqparse.parse_args()
        args['application_id'] = application_id
        note = Note(args)
        db.seesion.add(note)
        db.commit()
        return 'Note added!', 201
