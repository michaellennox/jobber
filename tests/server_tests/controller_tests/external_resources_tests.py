import urllib.request
from server.helpers.getjobs_controllers_helpers import format_query, generate_xml_file
from .helpers import APITestCase
from unittest.mock import MagicMock


class TestGetJobsAPI(APITestCase):
    def test_format_query_converts_whitespace_to_hyphens(self):
        self.assertEqual(format_query("java developer"), "java-developer")

    def test_generate_xml_file_requests_from_correct_url(self):
        urllib.request.urlopen = MagicMock(return_value='string')
        generate_xml_file('11', 'java', 'London')
        urllib.request.urlopen.assert_called_with(
            'http://api.indeed.com/ads/apisearch?publisher='
            + '11' + '&q='
            + 'java' + '&l=' + 'London'
            + '&st=employer&latlong=1&co=gb&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
