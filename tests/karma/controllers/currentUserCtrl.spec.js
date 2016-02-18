describe('CurrentUserCtrl', function() {
  var ctrl;
  var userAuthFactoryMock;

  beforeEach(function() {
    userAuthFactoryMock = jasmine.createSpyObj(
      'userAuthFactory',
      ['logout', 'currentUser']
    );
    module('Jobber', {
      userAuthFactory: userAuthFactoryMock
    });
  });

  beforeEach(inject(function($controller) {
    ctrl = $controller('CurrentUserCtrl');
  }));

  describe('#currentUser()', function() {
    it('calls currentUser on userAuthFactory', function() {
      ctrl.currentUser();
      expect(userAuthFactoryMock.currentUser).toHaveBeenCalled();
    });
  });

  describe('#logout()', function() {
    it('calls logout() on userAuthFactory', function() {
      ctrl.logout();
      expect(userAuthFactoryMock.logout).toHaveBeenCalled();
    });
  });
});
