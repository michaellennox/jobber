var IndexPage = function(){
  this.addLink = element(by.css("a[href*='/companies/new']"));
  this.companiesList = element.all(by.repeater("company in ctrl.companies"));
  this.company = element(by.binding("company.name"));
};

IndexPage.prototype.get = function(){
  browser.get("http://localhost:8080");
};

IndexPage.prototype.clickAdd = function(){
  this.addLink.click();
};

IndexPage.prototype.viewCompany = function(number) {
  this.companiesList.get(number).click();
};

module.exports = IndexPage;
