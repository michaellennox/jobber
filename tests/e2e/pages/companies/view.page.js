var ViewPage = function() {
  this.companyName = element(by.binding("ctrl.company.name"));
  this.addPersonLink = element(by.css("#addPerson"));
  this.addJobLink = element(by.css("#addJob"));
  this.peopleList = element.all(by.repeater("person in ctrl.people"));
  this.person = this.peopleList.get(0);
  this.jobList = element.all(by.repeater("job in ctrl.jobs"));
  this.job = this.jobList.get(0);
  this.deleteBtn = element(by.css("#delete"));
};


ViewPage.prototype.clickAddPersonLink = function(){
  this.addPersonLink.click();
};

ViewPage.prototype.clickAddJobLink = function(){
  this.addJobLink.click();
}

ViewPage.prototype.get = function(company_id) {
  browser.get("http://localhost:8080/companies/"+company_id)
};

ViewPage.prototype.clickDeleteCompany = function() {
  this.deleteBtn.click();
};

ViewPage.prototype.clickPersonLink = function() {
  this.person.element(by.css("a")).click();
};

module.exports = ViewPage;
