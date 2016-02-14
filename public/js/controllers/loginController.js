jobber.controller('LoginController', ['userAuthFactory', '$window', function(userAuthFactory, $window) {
  var self = this;

  self.login = function() {
    userAuthFactory.login(self.email, self.password)
      .then(function() {
        $window.location.href = '/companies';
      })
      .catch(function(error) {
        self.error = error;
      });
  };
}]);
