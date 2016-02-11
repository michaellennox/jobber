describe("Companies' partials", function(){
  var indexPage = require("./pages/companies/index.page.js"),
      newPage = require("./pages/companies/new.page.js"),
      viewPage = require("./pages/companies/view.page.js"),
      personNewPage = require("./pages/people/new.page.js"),
      companiesNewPage = new newPage,
      companiesViewPage = new viewPage,
      companiesIndexPage = new indexPage,
      peopleNewPage = new personNewPage;

  beforeEach(function(){
    companiesIndexPage.get();
  });

  it("starts with no companies", function(){
    expect(companiesIndexPage.companiesList.count()).toEqual(0);
  });

  describe("Adding a company", function() {
    beforeEach(function() {
      companiesNewPage.getNew();
      companiesNewPage.addCompany("testCo");
    });

    it("adds company to page", function() {
      companiesViewPage.viewCompany("testCo");
      expect(companiesViewPage.companyName).toEqual("testCo");
    });

    it("begins with no people added", function(){
      expect(companiesViewPage.peopleList.count()).toEqual(0);
    });

    describe("When Person is Added", function(){
      beforeEach(function(){
        companiesViewPage.clickAddPersonLink();
        peopleNewPage.addPerson("Testla");
      });

      it("displays people who have been added on the company view page", function(){
        expect(peopleNewPage.person).toEqual("Testla");
      });
    });
  });
});
