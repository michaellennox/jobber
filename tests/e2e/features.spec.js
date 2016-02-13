describe("Company partials.", function(){
  var indexPage = require("./pages/companies/index.page.js"),
      newPage = require("./pages/companies/new.page.js"),
      viewPage = require("./pages/companies/view.page.js"),
      personNewPage = require("./pages/people/new.page.js"),
      jobNewPage = require("./pages/jobs/new.job.js")
      companiesNewPage = new newPage,
      companiesViewPage = new viewPage,
      companiesIndexPage = new indexPage,
      peopleNewPage = new personNewPage;
      jobsNewPage = new jobNewPage;

  it("Runs the feature test", function(){
// VISITS COMPANIES INDEX PAGE
    companiesIndexPage.get();
// EXPECTS THERE TO BE NO COMPANIES YET
    expect(companiesIndexPage.companiesList.count()).toEqual(0);
// VISITS ADD COMPANY PAGE AND ADDS A COMPANY
    companiesIndexPage.clickAdd();
    companiesNewPage.addCompany("testCo");
// VISITS INDIVIDUAL COMPANY PAGE.
    companiesIndexPage.viewFirstCompany();
// EXPECTS COMPANY VIEW PAGE TO SHOW THE CORRECT NAME
    // expect(companiesViewPage.companyName.getText()).toEqual("testCo");
// EXPECTS THERE TO BE NO PEOPLE TO BEGIN WITH
    expect(companiesViewPage.peopleList.count()).toEqual(0);
// GOES TO ADD PERSON PAGE AND ADDS PERSON.
    companiesViewPage.clickAddPersonLink();
    peopleNewPage.addPerson("Testla");
// EXPECTS PERSON TO BE ADDED AND DISPLAYED
    expect(companiesViewPage.person.getText()).toEqual("Testla");
// EXPECTS NO JOBS TO BEGIN WITH
    expect(companiesViewPage.jobList.count()).toEqual(0);
// VISITS ADD JOBS PAGE AND ADDS A JOBS
    companiesViewPage.clickAddJobLink();
    jobsNewPage.addJob("Developer");
// EXPECTS JOB TO BE ADDED AND DISPLAYED
    expect(companiesViewPage.job.getText()).toEqual("Developer");
  });
});
