var NewJob = function(){
  this.jobInputBox = element(by.model("ctrl.title"));
  this.salaryInputBox = element(by.model("ctrl.salary"));
  this.locationInputBox = element(by.model("ctrl.location"));
  this.summaryInputBox = element(by.model("ctrl.summary"));
  this.perksInputBox = element(by.model("ctrl.perks"));
  this.submit = element(by.css("#submitJ"));

}

NewJob.prototype.addJob = function(title){
  this.jobInputBox.sendKeys(title);
  // this.salaryInputBox.sendKeys(200);
  this.submit.click();
}

module.exports = NewJob;
