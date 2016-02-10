describe('NewCompanyCtrl', function() {
  var ctrl;
  var $rootScope;
  var companiesResourceFactoryMock;
  var $windowMock;

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
    it('redirects to /#/companies/:name', function() {
      ctrl.name = 'makers';
      ctrl.createNewCompany();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/#/companies/makers');
    });
  });
});