jobber.controller('NewPersonCtrl', ['peopleResourceFactory', '$window', '$stateParams', function(peopleResourceFactory, $window, $stateParams) {
  var self = this;
  self.company_id = $stateParams.id;

  self.createNewPerson = function() {
    peopleResourceFactory.postPeople(self.name, self.company_id, self.job_title, self.email, self.location, self.summary, self.website)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
