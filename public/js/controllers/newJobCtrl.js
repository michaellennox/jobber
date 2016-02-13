jobber.controller('NewJobCtrl', ['jobsResourceFactory', '$window', '$routeParams', function(jobsResourceFactory, $window, $routeParams) {
  var self = this;
  self.company_id = $routeParams.id;

  self.createNewJob = function() {
    jobsResourceFactory.postJobs(self.company_id, self.title)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
