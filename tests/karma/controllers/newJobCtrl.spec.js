describe('NewJobCtrl', function() {
  var ctrl;
  var $rootScope;
  var jobsResourceFactoryMock;
  var $windowMock;

  beforeEach(function() {
    $windowMock = { location: { href: jasmine.createSpy() } };
    jobsResourceFactoryMock = jasmine.createSpyObj(
      'jobsResourceFactory',
      ['postJobs']
    );
    module('Jobber', {
      jobsResourceFactory: jobsResourceFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    jobsResourceFactoryMock.postJobs
      .and.returnValue($q.when({}));
    ctrl = $controller(
      'NewJobCtrl',
      { $routeParams: {id: 1} }
    );
    $rootScope = _$rootScope_;
  }));

  describe('#createNewJob()', function() {
    it('redirects to /#/companies/:id', function() {
      ctrl.title = 'Ruby Wizard';
      ctrl.createNewJob();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/companies/1');
    });
  });
});
