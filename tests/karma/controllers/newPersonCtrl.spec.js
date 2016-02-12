describe('NewPersonCtrl', function() {
  var ctrl;
  var $rootScope;
  var peopleResourceFactoryMock;
  var $windowMock;

  beforeEach(function() {
    $windowMock = { location: { href: jasmine.createSpy() } };
    peopleResourceFactoryMock = jasmine.createSpyObj(
      'peopleResourceFactory',
      ['postPeople']
    );
    module('Jobber', {
      peopleResourceFactory: peopleResourceFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    peopleResourceFactoryMock.postPeople
      .and.returnValue($q.when({}));
    ctrl = $controller(
      'NewPersonCtrl',
      { $routeParams: {id: 1} }
    );
    $rootScope = _$rootScope_;
  }));

  describe('#createNewPerson()', function() {
    it('redirects to /#/companies/:id', function() {
      ctrl.name = 'person';
      ctrl.createNewPerson();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/companies/1');
    });
  });
});
