#################
#### imports ####
#################

from flask import request
from flask.ext.restful import Resource, fields, marshal
from server import api, db
from server.models.company import Company
# import urllib
# from urllib import request
import urllib.request
import xml.etree.ElementTree as ET
import os
import json


################
#### config ####
################

job_fields = {
    'id': fields.Integer,
    'title': fields.String
}

person_fields = {
    'id': fields.Integer,
    'name': fields.String,
}

company_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'jobs': fields.List(fields.Nested(job_fields)),
    'people': fields.List(fields.Nested(person_fields))
}

################
#### routes ####
################


class CompaniesAPI(Resource):
    def get(self):
        companies = Company.query.all()
        return {'companies': [marshal(company, company_fields) for company in companies]}

    def post(self):
        company = Company(
            name=request.json.get('name')
        )
        db.session.add(company)
        db.session.commit()
        return 'Company Created!', 201


class CompanyAPI(Resource):
    def get(self, id):
        company = Company.query.get(id)
        return marshal(company, company_fields)

    def put(self, id):
        pass

    def delete(self, id):
        pass

class CompanyGetJobAPI(Resource):
    def post(self, id):
        key = os.environ['INDEED_API_KEY']
        query = request.json.get('query')
        location = request.json.get('location')
        xml_file = urllib.request.urlopen('http://api.indeed.com/ads/apisearch?publisher='
          + key + '&q='
          + query + '&l=' + location
          +'&sort=&radius=&st=employer&jt=&start=&limit=&fromage=&filter=&latlong=1&co=gb&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
        tree = ET.parse(xml_file)
        root = tree.getroot()
        results = root.findall('results/result')
        return {'jobs': [{"jobtitle": result.find('jobtitle').text,
                           "company": result.find('company').text,
                            "snippet": result.find('snippet').text,
                            "formattedLocation": result.find('formattedLocation').text,
                            "country": result.find('country').text,
                            "date": result.find('date').text,
                            "url": result.find('url').text} for result in results]}

api.add_resource(
    CompaniesAPI,
    '/api/companies',
    endpoint='companies'
)

api.add_resource(
    CompanyAPI,
    '/api/companies/<int:id>',
    endpoint='company'
)

api.add_resource(
    CompanyGetJobAPI,
    '/api/companies/<int:id>/getjobs',
    endpoint='company/getjobs'
)
