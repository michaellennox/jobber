jobber.factory('companiesResourceFactory', ['$http', function($http) {
  var self = {};

  self.getCompanies = function() {
    return $http.get('/api/companies');
  };

  self.postCompanies = function(name) {
    return $http.post('/api/companies', {name: name});
  };

  self.getCompanyByID = function(id) {
    return $http.get('/api/companies/' + id);
  };

  return self;
}]);
