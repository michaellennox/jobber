var RegisterPage = function(){
  this.email = element(by.model("ctrl.email"))
  this.password = element(by.model("ctrl.password"))
  this.firstName = element(by.model("ctrl.firstName"))
  this.lastName = element(by.model("ctrl.lastName"))
  this.submit = element(by.css("#register"))
};

RegisterPage.prototype.get = function(){
  browser.get("http://localhost:8080/register")
}

module.exports = RegisterPage;
