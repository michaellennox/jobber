var ViewJob = function(){
  this.deletBtn = element(by.css("#deleteBtn"));
};

ViewJob.prototype.deleteJob = function() {
  this.deletBtn.click();
};

module.exports = ViewJob;
