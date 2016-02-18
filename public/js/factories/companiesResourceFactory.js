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

  self.deleteCompanyByID = function(id){
    return $http.delete("/api/companies/" + id);
  };

  self.getCompanyFromLinkedin = function(url){
    return $http.post("/web/companies", {url: url});
  };

  return self;
}]);
