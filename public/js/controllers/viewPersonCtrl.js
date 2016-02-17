jobber.controller('ViewPersonCtrl', ['peopleResourceFactory', '$stateParams', '$window', function(peopleResourceFactory, $stateParams, $window){
  var self = this;
  self.id = $stateParams.id;
  self.company_id = $stateParams.company_id;

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
