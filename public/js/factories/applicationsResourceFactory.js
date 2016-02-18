jobber.factory('applicationsResourceFactory', ['$http', function($http) {
  var self = {};

  self.getApplications = function() {
    return $http.get('/api/applications');
  };

  self.postApplications = function(company_id) {
    return $http.post('/api/applications', {company_id: company_id});
  };

  self.getApplicationByID = function(id) {
    return $http.get('/api/applications/' + id);
  };

  return self;
}]);
