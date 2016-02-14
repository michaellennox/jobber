jobber.controller('LogoutController', ['userAuthFactory', function(userAuthFactory) {
  var self = this;

  self.currentUser = function() {
    return userAuthFactory.currentUser();
  };

  self.logout = function() {
    userAuthFactory.logout();
  };
}]);
