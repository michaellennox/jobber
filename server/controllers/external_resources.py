import os

from flask import request
from flask.ext.restful import Resource
from server.helpers.getjobs_controllers_helpers import get_xml, display_text

import time
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait


class CompanyScraperAPI(Resource):
    def post(self):
        url = request.json.get('url')
        driver = webdriver.PhantomJS()
        driver.wait = WebDriverWait(driver, 5)
        try:
            driver.get(url)
            results = {
                'name': driver.find_element_by_class_name('name').text,
                'summary': driver.find_element_by_class_name('basic-info-description').text,
                'logo': driver.find_element_by_class_name('image').get_attribute('src'),
                'website': driver.find_element_by_class_name('website').find_element_by_css_selector('p').text,
                'industry': driver.find_element_by_class_name('industry').text,
                'address': driver.find_element_by_class_name('adr').text,
                'specialties': driver.find_element_by_class_name('specialties').find_element_by_css_selector('p').text,
                'company size': driver.find_element_by_class_name('company-size').text,
                'type': driver.find_element_by_class_name('type').find_element_by_css_selector('p').text
            }
            time.sleep(5)
            driver.quit()
        except Exception:
            return 'Oops! Something went wrong, please check the url', 400
        return results, 200


class PeopleScraperAPI(Resource):
    def post(self):
        url = request.json.get('url')
        driver = webdriver.PhantomJS()
        driver.wait = WebDriverWait(driver, 5)
        try:
            driver.get(url)
            results = {
                'name': driver.find_element_by_id('name').text,
                'summary': driver.find_element_by_class_name('description').text,
                'job_title': driver.find_element_by_class_name('headline').text,
                'location': driver.find_element_by_class_name('locality').text,
                'photo': driver.find_element_by_class_name('image').get_attribute('src')
            }
            time.sleep(5)
            driver.quit()
        except Exception:
            return 'Oops! Something went wrong, please check the url', 400
        return results, 200


class GetJobsAPI(Resource):
    def post(self):
        key = os.environ['INDEED_API_KEY']
        results = get_xml(
            key,
            request.json.get('query'),
            request.json.get('location')
        )
        job_attributes = [
            "jobtitle", "company", "snippet", "formattedLocation",
            "country", "date", "url"
        ]
        return {'jobs': [display_text(job_attributes, result) for result in results]}
