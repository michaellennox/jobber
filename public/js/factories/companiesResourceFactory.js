jobber.factory('companiesResourceFactory', ['$http', function($http) {
  var companiesResourceFactory = {};

  companiesResourceFactory.getCompanies = function() {
    return $http.get('/api/companies');
  };

  companiesResourceFactory.postCompanies = function(name) {
    return $http.post('/api/companies', {name: name});
  };

  companiesResourceFactory.getCompanyByName = function(name) {
    return $http.get('/api/companies/' + name);
  };

  return companiesResourceFactory;
}]);
