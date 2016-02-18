jobber.factory('jobsResourceFactory', ['$http', function($http) {
  var self = {};

  self.postJobs = function(company_id, title, salary, location, summary, perks) {
    return $http.post(
      '/api/companies/' + company_id + '/jobs',
      {
        title: title,
        salary: salary,
        location: location,
        summary: summary,
        perks: perks
      }
    );
  };

  self.getJobByID = function(company_id, id) {
    return $http.get('/api/companies/' + company_id + '/jobs/' + id);
  };

  self.deleteJobByID = function(company_id, id) {
    return $http.delete("/api/companies/" + company_id + "/jobs/" + id);
  };

  self.getJobsFromWeb = function() {
    return $http.post(
      '/web/jobs',
      {
        location: 'London',
        query: 'developer'
      }
    );
  };

  return self;
}]);
