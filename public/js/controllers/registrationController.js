jobber.controller('RegistrationController', ['userAuthFactory', '$window', function(userAuthFactory, $window) {
  var self = this;

  self.register = function() {
    userAuthFactory.register(self.email, self.password, self.firstName, self.lastName)
      .then(function() {
        $window.location.href = '/login';
      })
      .catch(function(error) {
        self.error = error;
      });
  };
}]);
