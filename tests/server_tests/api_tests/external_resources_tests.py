from server.controllers.external_resources import CompanyScraperAPI, PeopleScraperAPI, GetJobsAPI
from server.helpers.getjobs_controllers_helpers import format_query
from .helpers import APITestCase


class TestGetJobsAPI(APITestCase):
    def test_format_query_converts_whitespace_to_hyphens(self):
        self.assertEqual(format_query("java developer"), "java-developer")
