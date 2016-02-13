var NewPage = function() {
  this.nameInput = element(by.model("ctrl.name"));
  this.submit = element(by.css("#submitCo"));
};

// NewPage.prototype.getNew = function(){
//   browser.get("http://localhost:8080/companies/new");
// };

NewPage.prototype.addCompany = function(company) {
  this.nameInput.sendKeys(company);
  this.submit.click();
};

module.exports = NewPage;
