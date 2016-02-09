describe("appController", function() {
  beforeEach(module("Jobber"));

  var ctrl;
  
  beforeEach(function(){
    inject(function($controller) {
      ctrl = $controller("appController");
    });
 });

  it("initializes with an empty array of companies", function(){
    expect(ctrl.companiesList).toEqual([]);
  });
});