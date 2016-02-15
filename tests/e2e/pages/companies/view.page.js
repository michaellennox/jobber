var ViewPage = function() {
  this.companyName = element(by.binding("ctrl.company.name"));
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

ViewPage.prototype.clickPersonLink = function(name) {
  var person = name.replace(/\s/g, '-');
  element(by.css("." + person)).click();
};

ViewPage.prototype.person = function(name) {
  var person = name.replace(/\s/g, '-');
  return element(by.css("." + person));
};

ViewPage.prototype.clickJobLink = function(job) {
  var jobLink = job.replace(/\s/g, '-');
  element(by.css("." + jobLink)).click();
};

module.exports = ViewPage;
