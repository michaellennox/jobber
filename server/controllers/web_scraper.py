from flask import request
from flask.ext.restful import Resource

import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException


class WebScraperAPI(Resource):
    def post(self):
        url = request.json.get('url')
        driver = webdriver.Firefox()
        driver.wait = WebDriverWait(driver, 5)
        driver.get(url)
        return{'name': driver.find_element_by_id('name').text}
        time.sleep(5)
        driver.quit()
