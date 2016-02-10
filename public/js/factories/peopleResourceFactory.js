jobber.factory('peopleResourceFactory', ['$http', function($http) {
  var peopleResourceFactory = {};

  peopleResourceFactory.postPeople = function(name, company_name) {
    return $http.post(
      '/api/companies/' + company_name + '/people',
      {name: name}
    );
  };

  return peopleResourceFactory;
}]);
