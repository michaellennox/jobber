jobber.factory('companiesResourceFactory', ['$http', '$q', function($http, $q) {
  var companiesResourceFactory = {};

  companiesResourceFactory.getCompanies = function() {
    return $http.get('/api/companies');
  };

  companiesResourceFactory.postCompanies = function(name) {
    return $http.post('/api/companies', {name: name});
  }

  companiesResourceFactory.getCompanyByName = function(name) {
    return $http.get('/api/companies/' + name);
  }

  return companiesResourceFactory;
}]);
