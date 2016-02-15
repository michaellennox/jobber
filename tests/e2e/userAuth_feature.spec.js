describe("User Sign In Feauture Test", function(){
  var loginPage = require("./pages/users/login.page.js"),
      registerPage = require("./pages/users/register.page.js"),
      userLoginPage = new loginPage(),
      userRegisterPage = new registerPage();

  it("Alanas Boyfriends Story...", function(){
    // dude wants to register for our awesome website
    userRegisterPage.get();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/register');
    // dude fills out the register form
    userRegisterPage.email.sendKeys("Alana@boyfriend.com");
    userRegisterPage.password.sendKeys("I<3Alana");
    userRegisterPage.firstName.sendKeys("Fred");
    userRegisterPage.lastName.sendKeys("Estair");
    userRegisterPage.submit.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/login');
    // dude fills out sign in form
    userLoginPage.email.sendKeys("Alana@boyfriend.com");
    userLoginPage.password.sendKeys("I<3Alana");
    userLoginPage.submit.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/companies');
    expect(userLoginPage.user.getText()).toEqual('Signed in as Alana@boyfriend.com')
  })
})
