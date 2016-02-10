jobber.controller('CompaniesCtrl', ['companiesResourceFactory', function(companiesResourceFactory) {
  var self = this;

  self.init = function() {
    companiesResourceFactory.getCompanies()
      .then(function(response) {
        self.companies = response.data.companies;
      });
  };

  self.init();
}]);
