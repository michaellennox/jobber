var IndexPage = function(){

  this.addBtn = element(by.className("addBtn"));
  this.companiesList = element.all(by.repeater("company in ctrl.companiesList"));
};

IndexPage.prototype.get = function(){
  browser.get("http://localhost:8080");
};

IndexPage.prototype.clickAdd = function(){
  this.addBtn.click();
};

module.exports = IndexPage;
