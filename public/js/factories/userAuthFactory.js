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
  }

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
  }

  return userAuthFactory;
}]);
