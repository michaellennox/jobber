describe('ViewPersonCtrl', function() {
  var response;
  var ctrl;
  var $rootScope;
  var peopleResourceFactoryMock;

  beforeEach(function() {
    peopleResourceFactoryMock = jasmine.createSpyObj(
      'peopleResourceFactory',
      ['getPersonByID']
    );
    module('Jobber', {
      peopleResourceFactory: peopleResourceFactoryMock
    });
  });

  beforeEach(inject(function($controller, $q, _$rootScope_) {
    response = {
      data: {
        id: 0,
        name: 'Jeff'
      }
    };
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
});


// NEED TO ADD TEST FOR DELETING COMPANY
