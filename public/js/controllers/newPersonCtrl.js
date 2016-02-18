jobber.controller('NewPersonCtrl', ['peopleResourceFactory', '$window', '$stateParams', function(peopleResourceFactory, $window, $stateParams) {
  var self = this;
  self.company_id = $stateParams.id;

  self.createNewPerson = function() {
    peopleResourceFactory.postPeople(self.name, self.company_id, self.location, self.photo, self.summary)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
