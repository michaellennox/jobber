jobber.controller('ViewJobCtrl', ['jobsResourceFactory', '$routeParams', function(jobsResourceFactory, $routeParams){
  var self = this;
  self.id = $routeParams.id;
  self.company_id = $routeParams.company_id;

  (self.init = function() {
    jobsResourceFactory.getJobByID(self.company_id, self.id)
      .then(function(response) {
        self.job = response.data;
        self.company = response.data.company;
      });
  })();
}]);
