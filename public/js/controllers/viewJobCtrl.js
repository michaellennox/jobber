jobber.controller('ViewJobCtrl', ['jobsResourceFactory', '$routeParams', function(jobsResourceFactory, $routeParams){
  var self = this;
  self.id = $routeParams.id;
  self.company_id = $routeParams.company_id;

  (self.init = function() {
    jobsResourceFactory.getJobByID(self.id, self.company_id)
      .then(function(response) {
        self.job = response.data;
      });
  })();
}]);
