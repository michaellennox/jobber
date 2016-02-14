describe('ViewCompanyCtrl', function() {
  var response,
      ctrl,
      $rootScope,
      $windowMock,
      companiesResourceFactoryMock;

  beforeEach(function() {
    companiesResourceFactoryMock = jasmine.createSpyObj(
      'companiesResourceFactory',
      ['getCompanyByID', 'deleteCompanyByID']
    );
    module('Jobber', {
      companiesResourceFactory: companiesResourceFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    response = {
      data: {
        id: 0,
        name: 'company'
      }
    };
    companiesResourceFactoryMock.deleteCompanyByID
      .and.returnValue("Deleted");
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

  describe("#deleteCompany()", function(){
    it("redirects to /companies", function(){
      ctrl.deleteCompany();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/companies');
    });
  });
});



