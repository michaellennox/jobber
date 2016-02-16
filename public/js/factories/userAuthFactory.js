jobber.factory('userAuthFactory', ['$q', '$http', 'localStorageService', function($q, $http, localStorageService) {
  var self = {};

  self.isLoggedIn = function() {
    if(localStorageService.get('user')) {
      return true;
    } else {
      return false;
    }
  };

  self.login = function(email, password) {
    var deferred = $q.defer();
    $http.post('/api/sessions', {email: email, password: password})
      .then(function(res) {
        localStorageService.set('user', res.data.user)
        deferred.resolve();
      }, function(resErr) {
        localStorageService.remove('user')
        deferred.reject(resErr.data);
      });
    return deferred.promise;
  };

  self.logout = function() {
    localStorageService.remove('user')
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
    return localStorageService.get('user');
  };

  return self;
}]);
