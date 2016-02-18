jobber.factory('companiesResourceFactory', ['$http', function($http) {
  var self = {};

  self.getCompanies = function() {
    return $http.get('/api/companies');
  };

  self.postCompanies = function(name, summary, website, industry, city, postcode, size, logo) {
    return $http.post('/api/companies',
    {
      name: name,
      summary: summary,
      website: website,
      industry: industry,
      city: city,
      postcode: postcode,
      size: size,
      logo: logo
    });
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
