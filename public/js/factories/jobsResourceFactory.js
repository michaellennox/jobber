jobber.factory('jobsResourceFactory', ['$http', function($http) {
  var jobsResourceFactory = {};

  jobsResourceFactory.postJobs = function(title, company_id) {
    return $http.post(
      '/api/companies/' + company_id + '/jobs',
      {title: title}
    );
  };

  jobsResourceFactory.getJobByID = function(id, company_id){
    return $http.get('/api/companies/' + company_id + '/jobs/' + id);
  };

  return jobsResourceFactory;
}]);
