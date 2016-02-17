jobber.controller('ViewJobCtrl', ['jobsResourceFactory', '$stateParams', '$window', function(jobsResourceFactory, $stateParams, $window){
  var self = this;
  self.id = $stateParams.id;
  self.company_id = $stateParams.company_id;

  (self.init = function() {
    jobsResourceFactory.getJobByID(self.company_id, self.id)
      .then(function(response) {
        self.job = response.data;
      });
  })();

  self.deleteJob = function(){
    jobsResourceFactory.deleteJobByID(self.company_id, self.id)
      .then(function(){
        $window.location.href = "/companies/" + self.company_id;
      });
  };
}]);