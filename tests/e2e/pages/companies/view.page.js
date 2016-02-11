var ViewPage = function() {
  this.companyName = element(by.binding("ctrl.company.name"));
  this.addPersonLink = element(by.css("#addPerson"));
  this.peopleList = element.all(by.repeater("person in ctrl.people"));
  this.person = this.peopleList.first();
};


ViewPage.prototype.clickAddPersonLink = function(){
  this.addPersonLink.click();
};

ViewPage.prototype.get = function() {
  browser.get("http://localhost:8080/companies/0/5")
};

module.exports = ViewPage;
