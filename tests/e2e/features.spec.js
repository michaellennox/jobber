describe("Company partials.", function(){
  var indexPage = require("./pages/companies/index.page.js"),
      newPage = require("./pages/companies/new.page.js"),
      viewPage = require("./pages/companies/view.page.js"),
      personNewPage = require("./pages/people/new.page.js"),
      jobNewPage = require("./pages/jobs/new.page.js"),
      personViewPage = require("./pages/people/view.page.js"),
      jobViewPage = require("./pages/jobs/view.page.js"),
      companiesNewPage = new newPage(),
      companiesViewPage = new viewPage(),
      companiesIndexPage = new indexPage(),
      peopleNewPage = new personNewPage(),
      peopleViewPage = new personViewPage(),
      jobsViewPage = new jobViewPage(),
      jobsNewPage = new jobNewPage();

  it("Alana's Story...", function(){
// Alana has just graduated from Makers Academy,
// which means Alana is now a kick ass developer.
// As a kick ass developer,
// So that she can get PAID,
// Alana needs a job.
// So she visits Jobbr....
   companiesIndexPage.get();
// Blown away by the beautiful design she decides to join...
// As expected there are no comapnies yet, because she hasn't added any:
    expect(companiesIndexPage.companiesList.count()).toEqual(0);
// Alana decides to add one...
    companiesIndexPage.clickAdd();
    companiesNewPage.addCompany("testCo");
// Now she can see the company on the homepage!
    expect(companiesIndexPage.companiesList.count()).toEqual(1);
    expect(companiesIndexPage.company.getText()).toEqual("testCo");
// Alana clicks on the company...
    companiesIndexPage.viewCompany(0);
// She sees the company name,
    expect(companiesViewPage.companyName.getText()).toEqual("testCo");
// but there are no people yet.
    expect(companiesViewPage.peopleList.count()).toEqual(0);
// She adds a person of interest who works at the company
    companiesViewPage.clickAddPersonLink();
    peopleNewPage.addPerson("Testla");
// And she sees them there!
    expect(companiesViewPage.person(0).getText()).toEqual("Testla");
// Alana adds another....
    companiesViewPage.clickAddPersonLink();
    peopleNewPage.addPerson("Elons Musk");
// ...but decides they aren't the right person to talk to.
// she visits their profile.
    companiesViewPage.clickPersonLink(1);
// and deletes them.
    peopleViewPage.deletePerson();
//  It's super efective!
    expect(companiesViewPage.peopleList.count()).toEqual(1);
// There are no jobs at the company yet...
    expect(companiesViewPage.jobList.count()).toEqual(0);
// so she adds one...
    companiesViewPage.clickAddJobLink();
    jobsNewPage.addJob("Developer");
// And she sees it displayed!
    expect(companiesViewPage.job(0).getText()).toEqual("Developer");
// She adds another.
    companiesViewPage.clickAddJobLink();
    jobsNewPage.addJob("Java developer");
// then changes her mind.
    companiesViewPage.clickJobLink(1);
    jobsViewPage.deleteJob();
// Much better.
    expect(companiesViewPage.jobList.count()).toEqual(1);
// Alana is impressed, but no longer wants to work at testCo,
// so she decides to delete it.
    companiesViewPage.clickDeleteCompany();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/companies");
    expect(companiesIndexPage.companiesList.count()).toEqual(0);
  });
});
