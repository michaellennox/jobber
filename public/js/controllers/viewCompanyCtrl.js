jobber.controller('ViewCompanyCtrl', ['companiesResourceFactory', '$routeParams', function(companiesResourceFactory, $routeParams) {
  var self = this;
  self.id = $routeParams.id;

  self.init = function() {
    companiesResourceFactory.getCompanyByID(self.id)
      .then(function(response) {
        self.company = response.data;
      });
  };

  self.init();
}]);
