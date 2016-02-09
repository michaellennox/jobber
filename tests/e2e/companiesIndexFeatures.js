describe("Companies index page", function(){
  var index,
      indexPage;

  beforeEach(function(){
    indexPage = require("./pages/companies/index.page.js")
    index = new indexPage;
    index.get();
  });

  it("starts with no companies", function(){
    expect(index.companiesList.count()).toEqual(0);
  });


});
