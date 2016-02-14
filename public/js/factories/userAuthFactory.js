jobber.factory('userAuthFactory', ['$q', '$http', function($q, $http) {
  var self = {};

  self._user = null;

  self.isLoggedIn = function() {
    if(self._user) {
      return true;
    } else {
      return false;
    }
  };

  self.login = function(email, password) {
    var deferred = $q.defer();
    $http.post('/api/sessions', {email: email, password: password})
      .then(function(res) {
        self._user = res.data.user;
        deferred.resolve();
      }, function(resErr) {
        self._user = null;
        deferred.reject(resErr.data);
      });
    return deferred.promise;
  };

  self.logout = function() {
    self._user = null;
    return $http.delete('/api/sessions');
  };

  self.register = function(email, password, firstName, lastName) {
    var deferred = $q.defer();
    $http.post('/api/users', {
      email: email,
      password: password,
      first_name: firstName,
      last_name:lastName
    }).then(function(res) {
        deferred.resolve();
      }, function(resErr) {
        deferred.reject(resErr.data);
      });
    return deferred.promise;
  };

  self.currentUser = function() {
    return self._user;
  };

  return self;
}]);
