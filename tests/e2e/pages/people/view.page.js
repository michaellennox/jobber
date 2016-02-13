var ViewPage = function (){
  this.name = element(by.binding("ctrl.person.name"));
  this.deleteBtn = element(by.css("#deleteBtn"));
};

ViewPage.prototype.get = function(company_id, person_id) {
  browser.get("http://localhost:8080/companies/"+company_id+"/people/"+person_id);
};

ViewPage.prototype.deletePerson = function() {
  this.deleteBtn.click();
};

module.exports = ViewPage;