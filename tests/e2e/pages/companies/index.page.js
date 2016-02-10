var IndexPage = function(){

  this.addLink = element(by.className("addLink"));
  this.companiesList = element.all(by.repeater("company in ctrl.companies"));
};

IndexPage.prototype.get = function(){
  browser.get("http://localhost:8080");
};

IndexPage.prototype.clickAdd = function(){
  this.addLink.click();
};

module.exports = IndexPage;
