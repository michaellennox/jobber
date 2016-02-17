jobber.controller('NewPersonCtrl', ['peopleResourceFactory', '$window', '$routeParams', function(peopleResourceFactory, $window, $routeParams) {
  var self = this;
  self.company_id = $routeParams.id;

  self.createNewPerson = function() {
    peopleResourceFactory.postPeople(self.company_id, self.name, self.job_title, self.website, self.email, self.location, self.summary)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
