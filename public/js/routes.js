jobber.config(['$stateProvider', '$locationProvider', '$urlRouterProvider' , function($stateProvider, $locationProvider, $urlRouterProvider){
  var partialDirectory = 'public/views/partials/';

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('authentication', {
      templateUrl: partialDirectory + 'authentication/layout.html'
    })
      .state('authentication.welcome', {
        url: '/',
        templateUrl: partialDirectory + 'authentication/welcome.html'
      })
      .state('authentication.register', {
        url: '/register',
        templateUrl: partialDirectory + 'authentication/register.html'
      })
      .state('authentication.login', {
        url: '/login',
        templateUrl: partialDirectory + 'authentication/login.html'
      })

    .state('application', {
      templateUrl: partialDirectory + 'application/layout.html'
    })
      .state('application.home', {
        url: '/dashboard',
        templateUrl: partialDirectory + 'application/home/view.html'
      })
      .state('application.companieslist', {
        url: '/companies',
        templateUrl: partialDirectory + 'application/companies/list.html'
      })
      .state('application.companiesnew', {
        url: '/companies/new',
        templateUrl: partialDirectory + 'application/companies/new.html'
      })
      .state('application.companiesview', {
        url: '/companies/:id',
        templateUrl: partialDirectory + '/application/companies/view.html'
      })
      .state('application.peoplenew', {
        url: '/companies/:id/people/new',
        templateUrl: partialDirectory + '/application/people/new.html'
      })
      .state('application.peopleview', {
        url: '/companies/:company_id/people/:id',
        templateUrl: partialDirectory + '/application/people/view.html'
      })
      .state('application.jobsnew', {
        url: '/companies/:id/jobs/new',
        templateUrl: partialDirectory + '/application/jobs/new.html'
      });
  $locationProvider.html5Mode(true);
}]);
