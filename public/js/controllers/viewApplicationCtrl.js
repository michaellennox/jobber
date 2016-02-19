jobber.controller('ViewApplicationCtrl', ['applicationsResourceFactory', '$stateParams', function(applicationsResourceFactory, $stateParams) {
  var self = this;
  self.id = $stateParams.id;

  (self.init = function() {
    applicationsResourceFactory.getApplicationByID(self.id)
      .then(function(response) {
        self.application = response.data;
      });
  })();
}]);
