from flask.ext.security.utils import encrypt_password
from server import db
from server.models.user import user_datastore
from server.models.company import Company
from server.models.application import Application
from server.models.event import Event
from .helpers import APITestCase, EventsAPIMixin


class TestEventsAPI(APITestCase, EventsAPIMixin):
    def test_valid_POST_returns_success_message(self):
        user = user_datastore.create_user(
            email='test@example.com',
            password=encrypt_password('example')
        )
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()
        application = Application(dict(user_id=user.id, company_id=company.id))
        db.session.add(application)
        db.session.commit()

        res = self.POST_events(application.id)

        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Event added!'))

    def test_valid_POST_saves_to_database(self):
        user = user_datastore.create_user(
            email='test@example.com',
            password=encrypt_password('example')
        )
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()
        application = Application(dict(user_id=user.id, company_id=company.id))
        db.session.add(application)
        db.session.commit()

        self.POST_events(application.id)
        event = Event.query.get(1)

        self.assertEquals(Event.query.count(), 2)
        self.assertEquals(event.application, application)
