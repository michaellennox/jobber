jobber.controller("appController", function(){
  var self = this;

  self.companiesList = [];

  self.addCompany = function() {
    self.companiesList.push(self.company);
  };
});
