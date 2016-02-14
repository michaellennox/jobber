jobber.factory('userAuthFactory', ['$q', '$http', function($q, $http) {
  userAuthFactory = {};

  var self = userAuthFactory;

  userAuthFactory._user = null;

  userAuthFactory.isLoggedIn = function() {
    if(self._user) {
      return true;
    } else {
      return false;
    }
  };

  userAuthFactory.login = function(email, password) {
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

  userAuthFactory.logout = function() {
    self._user = null;
    return $http.delete('/api/sessions');
  };

  userAuthFactory.register = function(email, password, firstName, lastName) {
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

  userAuthFactory.currentUser = function() {
    return self._user;
  };

  return userAuthFactory;
}]);
