var ViewJob = function(){
  this.deletBtn = element(by.css("#deletBtn"));
};

ViewJob.prototype.deleteJob = function() {
  this.deletBtn.click();
};

module.exports = ViewJob;