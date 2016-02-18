jobber.factory('companiesResourceFactory', ['$http', function($http) {
  var self = {};

  self.getCompanies = function() {
    return $http.get('/api/companies');
  };

  self.postCompanies = function(name, summary, website, industry, address, size) {
    return $http.post('/api/companies',
    {
      name: name,
      summary: summary,
      website: website,
      industry: industry,
      address: address,
      size: size
    });
  };

  self.getCompanyByID = function(id) {
    return $http.get('/api/companies/' + id);
  };

  self.deleteCompanyByID = function(id){
    return $http.delete("/api/companies/" + id);
  };

  return self;
}]);
