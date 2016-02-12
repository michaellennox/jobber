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
    .when("/companies/:company_id/people/:id", {
      templateUrl: partialDirectory + "people/view.html"
    })
    .when("/companies/:id/jobs/new", {
      templateUrl: partialDirectory + "jobs/new.html"
    })
    .otherwise({
      redirectTo: "/companies"
    });
  $locationProvider.html5Mode(true);
}]);
