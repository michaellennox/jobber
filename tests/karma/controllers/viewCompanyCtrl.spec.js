describe('ViewCompanyCtrl', function() {
  var response;
  var ctrl;
  var $rootScope;
  var companiesResourceFactoryMock;

  beforeEach(function() {
    companiesResourceFactoryMock = jasmine.createSpyObj(
      'companiesResourceFactory',
      ['getCompanyByName']
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
    companiesResourceFactoryMock.getCompanyByName
      .and.returnValue($q.when(response));
    ctrl = $controller(
      'ViewCompanyCtrl',
      { $routeParams: {name: 'company'} }
    );
    $rootScope = _$rootScope_;
  }));

  it('initializes with company info from the resource factory', function() {
    $rootScope.$digest();
    expect(ctrl.company)
      .toEqual(response.data);
  });
});
