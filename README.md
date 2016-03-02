# Jobber [![Build Status](https://travis-ci.org/michaellennox/jobber.svg?branch=master)](https://travis-ci.org/michaellennox/jobber) [![Coverage Status](https://coveralls.io/repos/github/michaellennox/jobber/badge.svg?branch=coveralls)](https://coveralls.io/github/michaellennox/jobber?branch=coveralls)

A 'CRM' style application for discovering new companies who might hire you and keeping track of your job search through a set of helpful and informative tools.

![landing](http://i.imgur.com/6agNIn3.png)

![dashboard](http://i.imgur.com/9xPrhXX.png)

![example profile](http://i.imgur.com/bY0L1B6.png)

![ATS](http://i.imgur.com/Bsd8kTM.png)

## The Problem Statement

I am a job hunter. I want a website that will help me:
 
* **Discover** new companies who might hire me 

* **Keep track** of my job applications


## So What's Here?

Right now, there's just the basics of our platform

* The ability for users to populate companies, people and jobs,
* The ability to discover new jobs listed on outside resources via our /web/jobs API
* Informative pages on companies, people and jobs
* WebScrapers implemented to make contributing to the database as simple and painless as possible
* Local user authentication
* Application tracking system to make keeping a lid on your job hunt nice and easy

## Technologies

__API/Server__

* Python
* Flask
* Postgres/SQLAlchemy
* User Authentication with Flask-Security
* Web scraping of dynamic JavaScript pages conducted using Selenium 
* Tested with Flask-Testing (a framework which extends on unittest) and nose
* Jobs API sourced from [Indeed.com](http://www.indeed.co.uk/jsp/apiinfo.jsp)

__Client__

* AngularJS
* HTML5
* SCSS
* Tested with Jasmine, Karma and Protractor

__Linking Client with API/Server__

* JSON
* Initial testing using Postman, automation of testing enabled using nose

## Installation Instructions

You will require nodeJS, python3 and postgres installed to make this application work.

Clone from github and move into directory.

```
$ git@github.com:michaellennox/jobber.git
$ cd jobber
```

Create and start your virtual environment.

```
$ pip3 install virtualenv
$ virtualenv venv
$ source venv/bin/activate
```

Install all dependencies and export required env vars.

```
$ npm run setup
$ export APP_SETTINGS=config.DevelopmentConfig
$ export
```

Create the database and build the schema

```
$ psql
>> CREATE DATABASE jobber_dev
>> \q
$ python3 manage.py build_db
```

Start the server.

```
$ npm start
```

You can now use the Job Huntr application locally by visiting http://localhost:8080/

## Future Improvements

* Integrate applicant tracking system with a mentor/coach system so coaches can contribute to a job hunter's search
* Implement superusers so modifications to data can be carried out via app instead of DB
* Extract external resources (scrapers and APIs) from main application to their own box, connect either via an API gateway or MQ system
* Expand scrapers with spiders which can carry out database population without human guidance
* Implement search functionality

## Contributions

Feel free to get involved! Our waffleboard is available at [https://waffle.io/michaellennox/jobber](https://waffle.io/michaellennox/jobber)

## Contributors

* [Michael Lennox](https://github.com/michaellennox)
* [Adam Lancaster](https://github.com/Adzz)
* [James Borrell](https://github.com/JBorrell)
* [Andrew Burnie](https://github.com/Andrew47)
* [Hamid Zadeh](https://github.com/genzade)
