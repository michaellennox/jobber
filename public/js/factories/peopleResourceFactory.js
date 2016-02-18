jobber.factory('peopleResourceFactory', ['$http', function($http) {
  var self = {};


  self.postPeople = function(name, company_id, job_title, email, location, summary, website) {
    return $http.post(
      '/api/companies/' + company_id + '/people',
      {
        name: name,
        company_id: company_id,
        jobTitle: job_title,
        email: email,
        location: location,
        summary: summary,
        website: website,
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
