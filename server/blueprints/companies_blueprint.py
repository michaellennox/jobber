from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

companies_page = Blueprint('companies_page', __name__)

@companies_page.route('/<company>')
def show(company):
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)
