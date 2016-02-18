jobber.controller('NewCompanyCtrl', ['companiesResourceFactory', '$window', function(companiesResourceFactory, $window) {
  var self = this;

  self.createNewCompany = function() {
    companiesResourceFactory.postCompanies(self.name)
      .then(function() {
        $window.location.href = '/companies';
      });
  };

  self.scrapeCompanyData = function(){
    companiesResourceFactory.getCompanyFromLinkedin(self.companyURL)
      .then(function(response){
        self.scrapedData = response.data;
        self.name = response.
      });
  };
}]);
