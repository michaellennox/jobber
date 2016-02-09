var IndexPage = function(){
  this.header = element(by.className("title"));
};


IndexPage.prototype.get = function(){
  browser.get("http://localhost:8080");
};

module.exports = IndexPage;
