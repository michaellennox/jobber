describe('ViewCompanyCtrl', function() {
  var response;
  var ctrl;
  var $rootScope;
  var companiesResourceFactoryMock;

  beforeEach(function() {
    companiesResourceFactoryMock = jasmine.createSpyObj(
      'companiesResourceFactory',
      ['getCompanyByID']
    );
    module('Jobber', {
      companiesResourceFactory: companiesResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    response = {
      data: {
        id: 0,
        name: 'company'
      }
    };
    companiesResourceFactoryMock.getCompanyByID
      .and.returnValue($q.when(response));
    ctrl = $controller(
      'ViewCompanyCtrl',
      { $routeParams: {id: 0} }
    );
    $rootScope = _$rootScope_;
  }));

  it('initializes with company info from the resource factory', function() {
    $rootScope.$digest();
    expect(ctrl.company).toEqual(response.data);
  });
});
