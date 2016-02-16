from flask.ext.restful import Resource, fields, marshal, reqparse
from server import db
from server.models.event import Event


class EventsResource(Resource):
    def __init__(self):
        self.reqparse = reqparse.RequestParser()
        self.reqparse.add_argument('title', location='json')
        self.reqparse.add_argument('description', location='json')
        self.reqparse.add_argument('nature', location='json')
        self.reqparse.add_argument('date', location='json')
        super().__init__()


class EventsAPI(EventsResource):
    def post(self, application_id):
        args = self.reqparse.parse_args()
        args['application_id'] = application_id
        event = Event(args)
        db.session.add(event)
        db.session.commit()
        return 'Event added!', 201
