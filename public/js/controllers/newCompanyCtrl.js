jobber.controller('NewCompanyCtrl', ['companiesResourceFactory', '$window', function(companiesResourceFactory, $window) {
  var self = this;

  self.createNewCompany = function() {
    companiesResourceFactory.postCompanies(self.name, self.summary, self.website, self.industry, self.address, self.size)
      .then(function() {
        $window.location.href = '/companies';
      });
  };
}]);
