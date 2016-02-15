from server import db
from server.models.company import Company
from .helpers import APITestCase, CompaniesAPIMixin, CompanyAPIMixin


class TestCompaniesAPI(APITestCase, CompaniesAPIMixin):
    def test_GET_returns_companies_as_json(self):
        res = self.GET_companies()

        self.assert_status(res, 200)
        self.assertEquals(res.json, dict(companies=[]))

    def test_valid_POST_returns_success_message(self):
        res = self.POST_companies()

        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Company Created!'))

    def test_valid_POST_saves_to_database(self):
        self.POST_companies(name='MegaCORP')

        company = Company.query.first()

        self.assertEqual(Company.query.count(), 1)
        self.assertEqual(company.name, 'MegaCORP')


class TestCompanyAPI(APITestCase, CompanyAPIMixin):
    def test_valid_GET_returns_company_as_json(self):
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()

        res = self.GET_company(1)

        self.assert_status(res, 200)
        self.assertEquals(res.json.get('name'), 'ACMECorp')

    def test_valid_PUT_returns_updated_company(self):
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()

        res = self.PUT_company(1, name='NotACME')

        self.assert_status(res, 200)
        self.assertEquals(res.json.get('name'), 'NotACME')

    def test_valid_PUT_updates_database(self):
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()

        self.PUT_company(1, name='Moo')

        company = Company.query.first()

        self.assertEqual(company.name, 'Moo')
