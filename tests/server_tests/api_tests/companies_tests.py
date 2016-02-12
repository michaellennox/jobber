from . import APITestCase, CompaniesAPIMixin, CompanyAPIMixin
from server import db
from server.models.company import Company


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
        company = Company(name='ACMECorp')
        db.session.add(company)
        db.session.commit()

        res = self.GET_company('1')

        self.assert_status(res, 200)
        self.assertEquals(res.json.get('name'), 'ACMECorp')
