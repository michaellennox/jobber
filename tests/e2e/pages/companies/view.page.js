var ViewPage = function() {
  this.companyName = element(by.binding("ctrl.company.name"));
  this.addPersonLink = element(by.css("#addPerson"));
  this.peopleList = element.all(by.repeater("person in ctrl.people"));
  this.person = this.peopleList.get(0);
};


ViewPage.prototype.clickAddPersonLink = function(){
  this.addPersonLink.click();
};

ViewPage.prototype.get = function(company_id) {
  browser.get("http://localhost:8080/companies/"+company_id)
};

module.exports = ViewPage;
