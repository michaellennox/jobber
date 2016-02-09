describe('CompaniesCtrl', function() {
  var response;
  var ctrl;
  var $rootScope;
  var companiesResourceFactoryMock;

  beforeEach(function() {
    companiesResourceFactoryMock = jasmine.createSpyObj(
      'CompaniesResourceFactoryMock',
      ['getCompanies']
    );
    module('Jobber', {
      companiesResourceFactory: companiesResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    response = {
      data: [{
        id: 0,
        name: 'company'
      }]
    };

    companiesResourceFactoryMock.getCompanies
      .and.returnValue($q.when(response));
    ctrl = $controller('CompaniesCtrl');
    $rootScope = _$rootScope_;
  }));

  it('initializes with companies from the resource factory', function() {
    $rootScope.$digest();
    expect(ctrl.companies)
      .toEqual(response.data);
  });
});
