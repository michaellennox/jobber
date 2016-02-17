jobber.controller('ViewCompanyCtrl', ['companiesResourceFactory', '$stateParams', '$window', function(companiesResourceFactory, $stateParams, $window) {
  var self = this;
  self.id = $stateParams.id;

  (self.init = function() {
    companiesResourceFactory.getCompanyByID(self.id)
      .then(function(response) {
        self.company = response.data;
        self.people = response.data.people;
        self.jobs = response.data.jobs;
      });
  })();

  self.deleteCompany = function() {
    companiesResourceFactory.deleteCompanyByID(self.id)
      .then(function(){
        $window.location.href = '/companies';
      });
  };
}]);
