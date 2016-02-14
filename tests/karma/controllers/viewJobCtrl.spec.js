describe('ViewJobCtrl', function() {
  var response,
      ctrl,
      $rootScope,
      $windowMock,
      jobsResourceFactoryMock;


  beforeEach(function() {
    jobsResourceFactoryMock = jasmine.createSpyObj(
      'jobsResourceFactory',
      ['getJobByID', 'deleteJobByID']
    );
    module('Jobber', {
      jobsResourceFactory: jobsResourceFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    response = {
      data: {
        id:0,
        title: 'plumber'
      }
    };

    jobsResourceFactoryMock.deleteJobByID
      .and.returnValue("Deleted");
    jobsResourceFactoryMock.getJobByID
      .and.returnValue($q.when(response));
    ctrl = $controller(
      'ViewJobCtrl',
      { $routeParams: {id: 0, company_id: 5} }
    );
    $rootScope = _$rootScope_;
  }));

  it('initializes with jobs info from the jobs resource factory', function() {
    $rootScope.$digest();
    expect(ctrl.job).toEqual(response.data);
  });

  describe("#deleteJob()", function(){
    it("redirects to /companies/:company_id", function(){
      ctrl.deleteJob();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/companies/5');
    });
  });
});
