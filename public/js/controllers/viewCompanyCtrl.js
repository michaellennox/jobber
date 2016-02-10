jobber.controller('ViewCompanyCtrl', ['companiesResourceFactory', '$routeParams', function(companiesResourceFactory, $routeParams) {
  var self = this;
  self.name = $routeParams.name;

  self.init = function() {
    companiesResourceFactory.getCompanyByName(self.name)
      .then(function(response) {
        self.company = response.data;
      });
  };

  self.init();
}]);
