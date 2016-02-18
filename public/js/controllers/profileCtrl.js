jobber.controller('ProfileCtrl', ['jobsResourceFactory', function(jobsResourceFactory) {
  var self = this;

  (self.init = function() {
    jobsResourceFactory.getJobsFromWeb()
      .then(function(response) {
        self.jobs = response.data.jobs;
      });
  })()
}]);
