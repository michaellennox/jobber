jobber.controller('CompaniesCtrl', ['companiesResourceFactory', function(companiesResourceFactory) {
  var self = this;

  (self.init = function() {
    companiesResourceFactory.getCompanies()
      .then(function(response) {
        console.log(response.data);
        self.companies = response.data.companies;
      });
  })();
}]);
