var WelcomePage = function(){
  this.login = element(by.css("#login"))
  this.register = element(by.css("#register"))
};

WelcomePage.prototype.get = function(){
  browser.get("http://localhost:8080/")
}

module.exports = WelcomePage;
