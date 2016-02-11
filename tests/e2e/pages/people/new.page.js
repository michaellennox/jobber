var NewPage = function() {
  this.nameInputBox = element(by.model("ctrl.name"));
  this.submit = element(by.css("#submitP"));
};

NewPage.prototype.addPerson = function(name) {
  this.nameInputBox.sendKeys(name);
  console.log(this.nameInputBox.getText());
  this.submit.click();
};

module.exports = NewPage;