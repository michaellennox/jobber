describe("People's partials", function(){

var newP = require("./pages/people/new.page.js"),
    viewP = require("./pages/people/view.page.js"),
    viewPage = new viewP,
    newPage = new newP;

  beforeEach(function(){
    viewPage.get("testCo", "Jeff");
   });

  it("Displays the name of the person", function(){
    expect(viewPage.name.getText()).toEqual("Jeff")
  });

});
