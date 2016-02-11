jobber.controller('NewCompanyCtrl', ['companiesResourceFactory', '$window', function(companiesResourceFactory, $window) {
  var self = this;

  self.createNewCompany = function() {
    companiesResourceFactory.postCompanies(self.name)
      .then(function() {
        $window.location.href = '/#/companies/';
      });
  };
}]);
