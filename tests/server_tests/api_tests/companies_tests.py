from . import APITestCase, CompaniesAPIMixins


class TestCompaniesAPI(APITestCase, CompaniesAPIMixins):
    def test_GET_returns_companies_as_json(self):
        res = self.GET_companies()
        self.assert_status(res, 200)
        self.assertEquals(res.json, dict(companies=[]))

    def test_valid_POST_returns_success_message(self):
        res = self.POST_companies()
        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Company Created!'))
