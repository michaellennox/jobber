jobber.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider){
  $routeProvider
    .when("/companies", {
      templateUrl: "public/views/partials/companies/index.html"
    })
    .when("/companies/new", {
      templateUrl: "public/views/partials/companies/new.html"
    })
    .when("/companies/:name", {
      templateUrl: "public/views/partials/companies/view.html"
    })
    .otherwise({
      redirectTo: "/companies"
    })
  $locationProvider.html5Mode(true);
}]);
