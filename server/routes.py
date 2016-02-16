from . import api
from server.controllers.companies import CompaniesAPI, CompanyAPI
from server.controllers.jobs import JobsAPI, JobAPI
from server.controllers.people import PeopleAPI, PersonAPI
# from server.controllers.getjobs import GetJobsAPI
from server.controllers.users import UsersAPI
from server.controllers.sessions import SessionsAPI
from server.controllers.external_resources import CompanyScraperAPI, PeopleScraperAPI, GetJobsAPI
# from server.controllers.company_scraper import CompanyScraperAPI

api.add_resource(
    CompanyScraperAPI,
    '/api/companyscraper',
    endpoint='companyscraper'
)

api.add_resource(
    PeopleScraperAPI,
    '/api/peoplescraper',
    endpoint='peoplescraper'
)

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
    JobsAPI,
    '/api/companies/<int:company_id>/jobs',
    endpoint='jobs'
)

api.add_resource(
    JobAPI,
    '/api/companies/<int:company_id>/jobs/<int:id>',
    endpoint='job'
)

api.add_resource(
    PeopleAPI,
    '/api/companies/<int:company_id>/people',
    endpoint='people'
)

api.add_resource(
    PersonAPI,
    '/api/companies/<int:company_id>/people/<int:id>',
    endpoint='person'
)

api.add_resource(
    GetJobsAPI,
    '/api/getjobs',
    endpoint='getjobs'
)

api.add_resource(
    UsersAPI,
    '/api/users',
    endpoint='users'
)

api.add_resource(
    SessionsAPI,
    '/api/sessions',
    endpoint='sessions'
)
