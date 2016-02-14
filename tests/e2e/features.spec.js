describe("Company partials.", function(){
  var indexPage = require("./pages/companies/index.page.js"),
      newPage = require("./pages/companies/new.page.js"),
      viewPage = require("./pages/companies/view.page.js"),
      personNewPage = require("./pages/people/new.page.js"),
      jobNewPage = require("./pages/jobs/new.job.js"),
      companiesNewPage = new newPage,
      companiesViewPage = new viewPage,
      companiesIndexPage = new indexPage,
      peopleNewPage = new personNewPage;
      jobsNewPage = new jobNewPage;


  it("Alanas's Story...", function(){
// Alana has just graduated from Makers Academy,
// which means Alana is now a kick ass developer.
// As a kick ass developer,
// So that she can get PAID,
// Alana needs a job. 
// So she visits Jobbr....

    companiesViewPage.clickDeleteCompany();
    expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/companies");
    expect(companiesIndexPage.companiesList.count()).toEqual(0);
  });
});
