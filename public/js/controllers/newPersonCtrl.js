jobber.controller('NewPersonCtrl', ['peopleResourceFactory', '$window', '$routeParams', function(peopleResourceFactory, $window, $routeParams) {
  var self = this;
  self.company_id = $routeParams.id;

  self.createNewPerson = function() {
    peopleResourceFactory.postPeople(self.name, self.company_id)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
