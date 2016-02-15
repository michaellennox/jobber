describe('NewCompanyCtrl', function() {
  var ctrl,
      $rootScope,
      $windowMock,
      companiesResourceFactoryMock;


  beforeEach(function() {
    $windowMock = { location: { href: jasmine.createSpy() } };
    companiesResourceFactoryMock = jasmine.createSpyObj(
      'companiesResourceFactory',
      ['postCompanies']
    );
    module('Jobber', {
      companiesResourceFactory: companiesResourceFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    companiesResourceFactoryMock.postCompanies
      .and.returnValue($q.when({}));
    ctrl = $controller('NewCompanyCtrl');
    $rootScope = _$rootScope_;
  }));

  describe('#createNewCompany()', function() {
    it('redirects to /companies', function() {
      ctrl.createNewCompany();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/companies');
    });
  });
});
