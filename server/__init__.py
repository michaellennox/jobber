#################
#### imports ####
#################

import os

from flask import Flask, send_from_directory
from flask.ext.restful import Api
from flask.ext.sqlalchemy import SQLAlchemy

################
#### config ####
################

app = Flask(__name__, static_folder='../public')
app.config.from_object('server.' + os.environ['APP_SETTINGS'])

####################
#### extensions ####
####################

api = Api(app)
db = SQLAlchemy(app)


@app.route('/')
def serve_client():
    angular = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "..", "public", "views")
    return send_from_directory(angular, 'index.html')

import server.controllers.companies
