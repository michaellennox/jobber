var ViewPage = function() {
  this.companyName = element.all(by.binding("ctrl.company.name")).get(1);
  this.addPersonLink = element(by.css("#addPerson"));
  this.addJobLink = element(by.css("#addJob"));
  this.peopleList = element.all(by.repeater("person in ctrl.people"));
  this.jobList = element.all(by.repeater("job in ctrl.jobs"));
  this.deleteBtn = element(by.css("#delete"));
};


ViewPage.prototype.clickAddPersonLink = function(){
  this.addPersonLink.click();
};

ViewPage.prototype.clickAddJobLink = function(){
  this.addJobLink.click();
}

ViewPage.prototype.get = function(company_id) {
  browser.get("http://localhost:8080/companies/" + company_id)
};

ViewPage.prototype.clickDeleteCompany = function() {
  this.deleteBtn.click();
};

ViewPage.prototype.clickPersonLink = function(index) {
  this.peopleList.get(index).click();
};

ViewPage.prototype.person = function(index) {
  return this.peopleList.get(index);
};

ViewPage.prototype.job = function(index) {
  return this.jobList.get(index);
};

ViewPage.prototype.clickJobLink = function(index) {
  this.jobList.get(index).click();
};

module.exports = ViewPage;
