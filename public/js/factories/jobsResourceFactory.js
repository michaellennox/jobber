jobber.factory('jobsResourceFactory', ['$http', function($http) {
  var jobsResourceFactory = {};

  jobsResourceFactory.postJobs = function(company_id, title) {
    return $http.post(
      '/api/companies/' + company_id + '/jobs',
      {title: title}
    );
  };

  jobsResourceFactory.getJobByID = function(company_id, id){
    return $http.get('/api/companies/' + company_id + '/jobs/' + id);
  };

  return jobsResourceFactory;
}]);
