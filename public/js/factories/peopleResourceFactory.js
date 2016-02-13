jobber.factory('peopleResourceFactory', ['$http', function($http) {
  var peopleResourceFactory = {};


  peopleResourceFactory.postPeople = function(company_id, name) {
    return $http.post(
      '/api/companies/' + company_id + '/people',
      {name: name}
    );
  };

  peopleResourceFactory.getPersonByID = function(company_id, id){
    return $http.get('/api/companies/' + company_id + '/people/' + id);
  };

  peopleResourceFactory.deletePersonByID = function(company_id, id){
    return $http.delete("/api/comapnies" + company_id + "/people/" + id);
  }

  return peopleResourceFactory;
}]);
