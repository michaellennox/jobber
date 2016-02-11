jobber.factory('peopleResourceFactory', ['$http', function($http) {
  var peopleResourceFactory = {};

  peopleResourceFactory.postPeople = function(name, company_id) {
    return $http.post(
      '/api/companies/' + company_id + '/people',
      {name: name}
    );
  };

  return peopleResourceFactory;
}]);
