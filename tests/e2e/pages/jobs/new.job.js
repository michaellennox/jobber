var NewJob = function(){
  this.jobInputBox = element(by.model("ctrl.title"));
  this.submit = element(by.css("#submitJ"))
}

NewJob.prototype.addJob = function(title){
  this.jobInputBox.sendKeys(title);
  this.submit.click();
}

module.exports = NewJob;
