jobber.controller('NewPersonCtrl', ['peopleResourceFactory', '$window', '$stateParams', function(peopleResourceFactory, $window, $stateParams) {
  var self = this;
  self.company_id = $stateParams.id;

  self.createNewPerson = function() {
    peopleResourceFactory.postPeople(self.name, self.company_id, self.job_title, self.location, self.photo, self.summary)
      .then(function() {
        $window.location.href = '/companies/' + self.company_id;
      });
  };

  self.scrapePersonData = function() {
    peopleResourceFactory.getPersonFromLinkedin(self.personURL)
      .then(function(response){
        self.scrapedData = response.data;
        self.name = response.data.name;
        self.job_title = response.data.job_title;
        self.location = response.data.location;
        self.photo = response.data.photo;
        self.summary = response.data.summary;
      });
  };
}]);
