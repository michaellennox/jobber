from server import db
from server.models.company import Company
from server.models.application import Application
from .helpers import APITestCase, AuthMixin, ApplicationsAPIMixin


class TestApplicationsAPI(APITestCase, AuthMixin, ApplicationsAPIMixin):
    def test_valid_POST_returns_success_message(self):
        company = Company(dict(name='ACEMECorp'))
        db.session.add(company)
        db.session.commit()

        self.login_test_user()
        res = self.POST_applications(company.id)

        self.assert_status(res, 201)
        self.assertEqual(res.json, 'Application Opened!')

    def test_valid_POST_saves_to_database(self):
        company = Company(dict(name='ACEMECorp'))
        db.session.add(company)
        db.session.commit()

        self.login_test_user()
        self.POST_applications(company.id)
        application = Application.query.first()

        self.assertEqual(Application.query.count(), 1)
        self.assertTrue(application.is_active)
