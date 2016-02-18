jobber.controller('NewPersonCtrl', ['peopleResourceFactory', '$window', '$stateParams', function(peopleResourceFactory, $window, $stateParams) {
  var self = this;
  self.company_id = $stateParams.id;

  self.createNewPerson = function() {
    peopleResourceFactory.postPeople(self.company_id, self.name, self.job_title, self.website, self.email, self.location, self.summary)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
