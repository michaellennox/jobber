jobber.factory('applicationsResourceFactory', ['$http', function($http) {
  var self = {};

  self.getApplications = function() {
    return $http.get('/api/companies');
  };

  self.postApplications = function(company_id) {
    return $http.post('/api/companies', {company_id: company_id});
  };

  return self;
}]);
