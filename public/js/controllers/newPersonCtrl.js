jobber.controller('NewPersonCtrl', ['peopleResourceFactory', '$window', '$routeParams', function(peopleResourceFactory, $window, $routeParams) {
  var self = this;
  self.company = $routeParams.name;

  self.createNewPerson = function() {
    peopleResourceFactory.postPeople(self.name, self.company)
      .then(function() {
        $window.location.href = '/#/companies/' + self.company;
      });
  };
}]);
