describe('ApplicationsCtrl', function() {
  var response;
  var ctrl;
  var $rootScope;
  var applicationsResourceFactoryMock;

  beforeEach(function() {
    response = {
      data: {
        applications: [{
          id: 0
        }]
      }
    };
    applicationsResourceFactoryMock = jasmine.createSpyObj(
      'ApplicationsResourceFactoryMock',
      ['getApplications']
    );
    module('Jobber', {
      applicationsResourceFactory: applicationsResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    applicationsResourceFactoryMock.getApplications
      .and.returnValue($q.when(response));
    ctrl = $controller('ApplicationsCtrl');
    $rootScope = _$rootScope_;
  }));

  it('initializes with applications from the resource factory', function() {
    $rootScope.$digest();
    expect(ctrl.applications)
      .toEqual(response.data.applications);
  });
});
