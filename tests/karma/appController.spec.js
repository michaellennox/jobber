describe("appController", function() {
  beforeEach(module("Jobber"));
  var ctrl;
  beforeEach(function(){

    console.log('in before inject');
    console.log(inject());
    inject(function($controller) {

      console.log($controller);
      ctrl = $controller("appController");
    });
 });

  it("initializes with an empty array of companies", function(){
    expect(ctrl.companiesList).toEqual([]);
  });
});