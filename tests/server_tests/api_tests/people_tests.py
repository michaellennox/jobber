from server import db
from server.models.company import Company
from server.models.person import Person
from . import APITestCase, PeopleAPIMixin, PersonAPIMixin


class TestPeopleAPI(APITestCase, PeopleAPIMixin):
    def test_valid_POST_returns_success_message(self):
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()

        res = self.POST_people(company.id)

        self.assert_status(res, 201)
        self.assertEquals(res.json, str('Person Created!'))

    def test_valid_POST_saves_to_database(self):
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()

        self.POST_people(company.id, name='ManBearDinosaur')

        person = Person.query.first()

        self.assertEqual(Person.query.count(), 1)
        self.assertEqual(person.name, 'ManBearDinosaur')


class TestPersonAPI(APITestCase, PersonAPIMixin):
    def test_GET_returns_person_as_json(self):
        company = Company(dict(name='ACMECorp'))
        db.session.add(company)
        db.session.commit()
        person = Person(dict(name='JobHuntr', company_id=company.id))
        db.session.add(person)
        db.session.commit()

        res = self.GET_person(company.id, person.id)

        self.assert_status(res, 200)
        self.assertEquals(res.json.get('name'), 'JobHuntr')
