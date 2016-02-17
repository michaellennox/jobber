jobber.config(['$stateProvider', '$locationProvider', '$urlRouterProvider' , function($stateProvider, $locationProvider, $urlRouterProvider){
  var partialDirectory = 'public/views/partials/';

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('authentication', {
      templateUrl: partialDirectory + 'authentication/index.html'
    })
      .state('authentication.welcome', {
        url: '/',
        templateUrl: partialDirectory + 'authentication/index.welcome.html'
      })
      .state('authentication.register', {
        url: '/register',
        templateUrl: partialDirectory + 'authentication/index.register.html'
      })
      .state('authentication.login', {
        url: '/login',
        templateUrl: partialDirectory + 'authentication/index.login.html'
      });

  $locationProvider.html5Mode(true);
}]);
