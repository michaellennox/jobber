describe('ViewJobCtrl', function() {
  var response,
      ctrl,
      $rootScope,
      $windowMock,
      jobsResourceFactoryMock;


  beforeEach(function() {
    $windowMock = { location: { href: jasmine.createSpy() } };
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
    deleteResponse = "Deleted";
    jobsResourceFactoryMock.deleteJobByID
      .and.returnValue($q.when(deleteResponse));
    jobsResourceFactoryMock.getJobByID
      .and.returnValue($q.when(response));
    ctrl = $controller(
      'ViewJobCtrl',
      { $stateParams: {id: 0, company_id: 5} }
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
