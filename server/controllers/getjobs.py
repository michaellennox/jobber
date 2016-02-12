import os

from flask import request
from flask.ext.restful import Resource
from server.helpers.getjobs_controllers_helpers import get_xml, display_text

class GetJobsAPI(Resource):
    def post(self):
        key = os.environ['INDEED_API_KEY']
        results = get_xml(key, request.json.get('query'), request.json.get('location'))
        job_attributes = ["jobtitle", "company", "snippet", "formattedLocation", "country", "date", "url"]
        return {'jobs': [display_text(job_attributes, result) for result in results]}
