from flask.ext.security.utils import encrypt_password
from server import db
from server.models.user import user_datastore
from server.models.company import Company
from server.models.application import Application
from server.models.note import Note
from .helpers import APITestCase, NotesAPIMixin


class TestNotesApi(APITestCase, NotesAPIMixin):
    def test_valid_POST_returns_success_massage(self):
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

        res = self.POST_notes(application.id)

        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Note added!'))

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

        self.POST_notes(application.id)
        note = Note.query.get(1)

        self.assertEquals(Note.query.count(), 1)
        self.assertEquals(note.application, application)
