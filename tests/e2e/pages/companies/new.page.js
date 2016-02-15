var NewPage = function() {
  this.nameInput = element(by.model("ctrl.name"));
  this.submit = element(by.css("#submitCo"));
};

NewPage.prototype.addCompany = function(company) {
  this.nameInput.sendKeys(company);
  this.submit.click();
};

module.exports = NewPage;
