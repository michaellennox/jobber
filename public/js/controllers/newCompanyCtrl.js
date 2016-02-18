jobber.controller('NewCompanyCtrl', ['companiesResourceFactory', '$window', function(companiesResourceFactory, $window) {
  var self = this;

  self.createNewCompany = function() {
    companiesResourceFactory.postCompanies(self.name, self.summary, self.website, self.industry, self.city, self.postcode, self.size, self.logo)
      .then(function() {
        $window.location.href = '/companies';
      });
  };

  self.scrapeCompanyData = function(){
    companiesResourceFactory.getCompanyFromLinkedin(self.companyURL)
      .then(function(response){
        self.scrapedData = response.data;
        self.name = response.data.name;
        self.summary = response.data.summary;
        self.website = response.data.website;
        self.industry = response.data.industry;
        self.city = response.data.city;
        self.postcode = response.data.postcode;
      });
  };
}]);
