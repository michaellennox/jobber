var IndexPage = function(){
  this.addLink = element(by.css("a[href*='/companies/new']"));
  this.companiesList = element.all(by.repeater("company in ctrl.companies"));
  this.firstItem = this.companiesList.get(0);
};

IndexPage.prototype.get = function(){
  browser.get("http://localhost:8080");
};

IndexPage.prototype.clickAdd = function(){
  this.addLink.click();
};

IndexPage.prototype.viewFirstCompany = function() {
  this.firstItem.element(by.binding("ctrl.company.name")).click();
};

module.exports = IndexPage;