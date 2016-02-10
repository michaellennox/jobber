var ViewPage = function() {
<<<<<<< HEAD
  this.companyName = element(by.binding("ctrl.company.name"));
  this.addPersonLink = element(by.css(".addPerson"));
  this.peopleList = element(by.repeater("person in pCtrl.people"));
  this.person = this.peopleList.first();

};

ViewPage.prototype.viewCompany = function(company){
  browser.get("localhost:8080/companies/" + company)
};

ViewPage.prototype.clickAddPersonLink = function(){
  this.addPersonLink.click();
=======
  this.companyName = element(by.css("#companyName"));
>>>>>>> a1a34368768345a0409f85763fca201443365299
};

module.exports = ViewPage;
