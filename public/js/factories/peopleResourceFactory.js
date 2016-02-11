jobber.factory('peopleResourceFactory', ['$http', function($http) {
  var peopleResourceFactory = {};

  peopleResourceFactory.postPeople = function(name, company_id) {
    return $http.post(
      '/api/companies/' + company_id + '/people',
      {name: name}
    );
  };

  peopleResourceFactory.getPersonByID = function(id, company_id){
    return $http.get("/api/companies/" + company_id + "/people/" + id)
  };

  return peopleResourceFactory;
}]);
