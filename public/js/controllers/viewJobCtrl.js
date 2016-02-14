jobber.controller('ViewJobCtrl', ['jobsResourceFactory', '$routeParams', '$window', function(jobsResourceFactory, $routeParams, $window){
  var self = this;
  self.id = $routeParams.id;
  self.company_id = $routeParams.company_id;

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