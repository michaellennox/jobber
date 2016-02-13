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
      }, function(res_err) {
        self._user = null;
        deferred.reject(res_err.data);
      });
    return deferred.promise;
  };

  userAuthFactory.logout = function() {
    self._user = null;
    return $http.delete('/api/sessions');
  };

  userAuthFactory.register = function(email, password, first_name, last_name) {
    var deferred = $q.defer();
    $http.post('/api/users', {
      email: email,
      password: password,
      first_name: first_name,
      last_name:last_name
    }).then(function(res) {
        deferred.resolve();
      }, function(res_err) {
        deferred.reject(res_err.data);
      });
    return deferred.promise;
  };

  userAuthFactory.currentUser = function() {
    return self._user;
  };

  return userAuthFactory;
}]);
