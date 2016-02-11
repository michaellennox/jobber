#################
#### imports ####
#################

from flask import url_for, request
from flask.ext.restful import Resource, fields, marshal
from server import api, db
from server.models.company import Company
import urllib
from urllib import request
import xml.etree.ElementTree as ET
import os


################
#### config ####
################

company_fields = {
    'id': fields.Integer,
    'name': fields.String
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
        return 'Company created!', 201


class CompanyAPI(Resource):
    def get(self, id):
        company = Company.query.get(id)
        return marshal(company, company_fields)

    def put(self, id):
        pass

    def delete(self, id):
        pass

class CompanyGetJobAPI(Resource):
    def get(self, query, location):
        key = os.environ['INDEED_API_KEY']
        xml_file = urllib.request.urlopen('http://api.indeed.com/ads/apisearch?publisher='
          + key + '&q='
          + query + '&l=' + location
          +'&sort=&radius=&st=employer&jt=&start=&limit=&fromage=&filter=&latlong=1&co=gb&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
        tree = ET.parse(xml_file)
        root = tree.getroot()
        results = root.findall('results/result')
        return {'jobs': [marshal(result.find('jobtitle').text,
                                 result.find('company').text,
                                 result.find('snippet').text,
                                 result.find('formattedLocation').text,
                                 result.find('country').text,
                                 result.find('date').text,
                                 result.find('url').text) for company in companies]}

        #to convert into a string add to end of xml_file: .read().decode('utf-8')



api.add_resource(CompaniesAPI, '/api/companies', endpoint='companies')
api.add_resource(CompanyAPI, '/api/companies/<int:id>', endpoint='company')
api.add_resource(CompanyGetJobAPI, '/api/companies/<int:id>/getjobs', endpoint='company')
