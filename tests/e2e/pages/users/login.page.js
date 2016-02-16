var LoginPage = function(){
  this.email = element(by.model("ctrl.email"))
  this.password = element(by.model("ctrl.password"))
  this.submit = element(by.css("#login"))
  this.user = element(by.css("#user"))
};

module.exports = LoginPage;
