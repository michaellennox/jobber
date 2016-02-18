jobber.factory('peopleResourceFactory', ['$http', function($http) {
  var self = {};


  self.postPeople = function(company_id, name, job_title, website, email, location, summary) {
    return $http.post(
      '/api/companies/' + company_id + '/people',
      {
        name: name,
        jobTitle: job_title,
        website: website,
        email: email,
        location: location,
        summary: summary
      }
    );
  };

  self.getPersonByID = function(company_id, id){
    return $http.get('/api/companies/' + company_id + '/people/' + id);
  };

  self.deletePersonByID = function(company_id, id){
    return $http.delete("/api/companies/" + company_id + "/people/" + id);
  };

  return self;
}]);