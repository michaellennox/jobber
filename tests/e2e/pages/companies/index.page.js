var IndexPage = function(){
  this.addLink = element(by.css("a[href*='/companies/new']"));
  this.companiesList = element.all(by.repeater("company in ctrl.companies"));
};

IndexPage.prototype.get = function(){
  browser.get("http://localhost:8080");
};

IndexPage.prototype.clickAdd = function(){
  this.addLink.click();
};

IndexPage.prototype.company = function() {
  return this.companiesList.get(0);
};

IndexPage.prototype.viewCompany = function(name) {
  var company = name.replace(/\s/g, '-');
  element(by.css("." + company)).click();
};

module.exports = IndexPage;
