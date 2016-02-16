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
