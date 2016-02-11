describe('ViewJobCtrl', function() {
  var response;
  var ctrl;
  var $rootScope;
  var jobsResourceFactoryMock;


  beforeEach(function() {
    jobsResourceFactoryMock = jasmine.createSpyObj(
      'jobsResourceFactory',
      ['getJobByID']
    );
    module('Jobber', {
      jobsResourceFactory: jobsResourceFactoryMock
    });
  });
  beforeEach(inject(function($controller, $q, _$rootScope_) {
    response = {
      data: {
        id:0,
        title: 'plumber'
      }
    };
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
});
