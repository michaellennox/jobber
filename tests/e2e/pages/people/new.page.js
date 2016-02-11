var NewPage = function() {
  this.nameInputBox = element(by.model("ctrl.name"));
  this.submit = element(by.css("#submitP"));
};

NewPage.prototype.addPerson = function(name) {
  this.nameInputBox.sendKeys(name);
  this.submit.click();
};

NewPage.prototype.visitPage = function(company_id) {
  browser.get("http://localhost8080/companies"+company_id+"/people/new")
};

module.exports = NewPage;