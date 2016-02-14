jobber.factory('jobsResourceFactory', ['$http', function($http) {
  var self = {};

  self.postJobs = function(company_id, title) {
    return $http.post(
      '/api/companies/' + company_id + '/jobs',
      {title: title}
    );
  };

  self.getJobByID = function(company_id, id){
    return $http.get('/api/companies/' + company_id + '/jobs/' + id);
  };

  return self;
}]);
