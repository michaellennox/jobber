jobber.controller("appController", function(){
  var self = this;
  console.log('in controller')

  self.companiesList = [];

  self.addCompany = function() {
    self.companiesList.push(self.company);
  };
});

console.log('controller file')