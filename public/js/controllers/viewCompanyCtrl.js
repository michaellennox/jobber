jobber.controller('ViewCompanyCtrl', ['companiesResourceFactory', '$stateParams', '$window', function(companiesResourceFactory, $stateParams, $window) {
  var self = this;
  self.id = $stateParams.id;

  (self.init = function() {
    companiesResourceFactory.getCompanyByID(self.id)
      .then(function(response) {
        self.company = response.data;
        self.people = response.data.people;
        self.jobs = response.data.jobs;
        self.summary = response.data.summary;
        self.website = response.data.website;
        self.industry = response.data.industry;
        self.city = response.data.city;
        self.postcode = response.data.postcode;
        self.size = response.data.size;
        self.logo = response.data.logo;
      });
  })();

  self.deleteCompany = function() {
    companiesResourceFactory.deleteCompanyByID(self.id)
      .then(function(){
        $window.location.href = '/companies';
      });
  };
}]);
