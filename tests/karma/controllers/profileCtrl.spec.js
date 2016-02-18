describe('ProfileCtrl', function() {
  var ctrl;
  var $rootScope;
  var jobsResourceFactoryMock;

  beforeEach(function() {
    jobsResourceFactoryMock = jasmine.createSpyObj(
      'jobsResourceFactory',
      ['getJobsFromWeb']
    );
    module('Jobber', {
      jobsResourceFactory: jobsResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    jobsResourceFactoryMock.getJobsFromWeb
      .and.returnValue($q.when({data: {jobs: 'manymanyjobs'}}));
    ctrl = $controller('ProfileCtrl');
    $rootScope = _$rootScope_;
  }));

  describe('on initialization', function() {
    it('sets jobs equal to the response from jobsResourceFactory', function() {
      $rootScope.$digest();
      expect(ctrl.jobs).toEqual('manymanyjobs');
    });
  });
});
