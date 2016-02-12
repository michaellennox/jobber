var ViewPage = function (){
  this.name = element(by.binding("ctrl.person.name"));
};

ViewPage.prototype.get = function(company_id, person_id) {
  browser.get("http://localhost:8080/companies/"+company_id+"/people/"+person_id);
};

module.exports = ViewPage;