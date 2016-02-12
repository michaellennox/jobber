jobber.controller('ViewPersonCtrl', ['peopleResourceFactory', '$routeParams', function(peopleResourceFactory, $routeParams){
  var self = this;
  self.id = $routeParams.id;
  self.company_id = $routeParams.company_id;

  (self.init = function() {
    peopleResourceFactory.getPersonByID(self.company_id, self.id)
      .then(function(response){
        self.person = response.data;
      });
  })();
}]);
