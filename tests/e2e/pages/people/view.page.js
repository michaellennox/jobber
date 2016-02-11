var ViewPage = function (){
  this.name = element(by.binding("ctrl.person.name"));
};

ViewPage.prototype.get = function(company, person) {
  browser.get("localhost:8080/companies/" + company + "/people/" + person)
};

module.exports = ViewPage;