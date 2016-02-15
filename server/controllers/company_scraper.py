from flask import request
from flask.ext.restful import Resource

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

class CompanyScraperAPI(Resource):
    def post(self):
        url = request.json.get('url')
        driver = webdriver.PhantomJS()
        driver.wait = WebDriverWait(driver, 5)
        driver.get(url)
        return {
            'name': driver.find_element_by_class_name('name').text,
            'summary': driver.find_element_by_class_name('basic-info-description').text,
            'photo': driver.find_element_by_class_name('image').get_attribute('src'),
            'website': driver.find_element_by_class_name('website').find_element_by_css_selector('p').text,
            'industry': driver.find_element_by_class_name('industry').text,
            'address': driver.find_element_by_class_name('adr').text,
            'specialties': driver.find_element_by_class_name('specialties').find_element_by_css_selector('p').text
        }
        time.sleep(5)
        driver.quit()
