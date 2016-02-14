jobber.controller('ViewPersonCtrl', ['peopleResourceFactory', '$routeParams', '$window', function(peopleResourceFactory, $routeParams, $window){
  var self = this;
  self.id = $routeParams.id;
  self.company_id = $routeParams.company_id;

  (self.init = function() {
    peopleResourceFactory.getPersonByID(self.company_id, self.id)
      .then(function(response){
        self.person = response.data;
      });
  })();

  self.deletePerson = function() {
    peopleResourceFactory.deletePersonByID(self.company_id, self.id)
      .then(function(){
        $window.location.href = '/companies/' + self.company_id;
      });
  };
}]);
