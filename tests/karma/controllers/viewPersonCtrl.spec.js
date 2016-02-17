describe('ViewPersonCtrl', function() {
  var response,
      ctrl,
      $rootScope,
      $windowMock,
      peopleResourceFactoryMock;

  beforeEach(function() {
    $windowMock = { location: { href: jasmine.createSpy() } };
    peopleResourceFactoryMock = jasmine.createSpyObj(
      'peopleResourceFactory',
      ['getPersonByID', 'deletePersonByID']
    );
    module('Jobber', {
      peopleResourceFactory: peopleResourceFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    response = {
      data: {
        id: 0,
        name: 'Jeff'
      }
    };
    deleteResponse = "Deleted";
    peopleResourceFactoryMock.deletePersonByID
      .and.returnValue($q.when(deleteResponse));
    peopleResourceFactoryMock.getPersonByID
      .and.returnValue($q.when(response));
    ctrl = $controller(
      'ViewPersonCtrl',
        { $routeParams: {id: 0, company_id: 5}}
      );
    $rootScope = _$rootScope_;
  }));

  it('initializes with a persons info from the person resource factory', function() {
    $rootScope.$digest();
    expect(ctrl.person).toEqual(response.data);
  });
  
  describe("#deletePerson()", function(){
    it("redirects to /companies/:company_id", function(){
      ctrl.deletePerson();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/companies/5');
    });
  });
});



