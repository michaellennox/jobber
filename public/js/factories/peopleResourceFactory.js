jobber.factory('peopleResourceFactory', ['$http', function($http) {
  var self = {};

  self.postPeople = function(name, company_id, job_title, location, photo, summary) {
    return $http.post(
      '/api/companies/' + company_id + '/people',
      {
        name: name,
        job_title: job_title,
        location: location,
        photo: photo,
        summary: summary,
      }
    );
  };

  self.getPersonByID = function(company_id, id){
    return $http.get('/api/companies/' + company_id + '/people/' + id);
  };

  self.deletePersonByID = function(company_id, id){
    return $http.delete("/api/companies/" + company_id + "/people/" + id);
  };

  self.getPersonFromLinkedin = function(url){
    return $http.post("/web/people", {url: url});
  };

  return self;
}]);
