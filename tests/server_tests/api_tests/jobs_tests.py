from server import db
from server.models.company import Company
from server.models.job import Job
from . import APITestCase, JobsAPIMixins, JobAPIMixins


class TestJobsAPI(APITestCase, JobsAPIMixins):
    def test_valid_POST_returns_success_message(self):
        company = Company(name='ACMECorp')
        db.session.add(company)
        db.session.commit()

        res = self.POST_jobs(company.id)

        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Job Created!'))


class TestJobAPI(APITestCase, JobAPIMixins):
    def test_GET_returns_job_as_json(self):
        company = Company(name='ACMECorp')
        db.session.add(company)
        db.session.commit()
        job = Job(title='JobMe', company_id=company.id)
        db.session.add(job)
        db.session.commit()

        res = self.GET_job(company.id, job.id)

        self.assert_status(res, 200)
        self.assertEquals(res.json.get('title'), 'JobMe')
