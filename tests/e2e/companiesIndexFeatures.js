describe("Companies index page", function(){
  var index,
      indexPage,
      newPage,
      newP,
      view,
      viewPage;

  beforeEach(function(){
    indexPage = require("./pages/companies/index.page.js");
    newPage = require("./pages/companies/new.page.js");
    viewPage = require("./pages/companies/view.page.js");
    newP = new newPage;
    view = new viewPage;
    index = new indexPage;
    index.get();
  });

  it("starts with no companies", function(){
    expect(index.companiesList.count()).toEqual(0);
  });

  describe("Adding a company", function() {
    beforeEach(function() {
      newP.getNew();
      newP.addCompany("testCo");
    });

    it("adds company to page", function() {
      expect(view.companyName).toEqual("testCo");
    });
  });
});
