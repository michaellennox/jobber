jobber.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider){
  var partialDirectory = "public/views/partials/";
  $routeProvider
    .when("/companies", {
      templateUrl: partialDirectory + "companies/index.html"
    })
    .when("/companies/new", {
      templateUrl: partialDirectory + "companies/new.html"
    })
    .when("/companies/:id", {
      templateUrl: partialDirectory + "companies/view.html"
    })
    .when("/companies/:id/people/new", {
      templateUrl: partialDirectory + "people/new.html"
    })
    .otherwise({
      redirectTo: "/companies"
    });
  $locationProvider.html5Mode(true);
}]);
