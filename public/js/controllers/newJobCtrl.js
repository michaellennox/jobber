jobber.controller('NewJobCtrl', ['jobsResourceFactory', '$window', '$stateParams', function(jobsResourceFactory, $window, $stateParams) {
  var self = this;
  self.company_id = $stateParams.id;

  self.createNewJob = function() {
    jobsResourceFactory.postJobs(self.company_id, self.title, self.salary, self.location, self.summary, self.perks)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
