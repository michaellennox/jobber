jobber.controller('ApplicationsCtrl', ['applicationsResourceFactory', function(applicationsResourceFactory) {
  var self = this;

  (self.init = function() {
    applicationsResourceFactory.getApplications()
      .then(function(response) {
        self.applications = response.data.applications;
      });
  })();
}]);
