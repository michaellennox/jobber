describe('RegistrationController', function() {
  var ctrl;
  var $rootScope;
  var $q;
  var userAuthFactoryMock;
  var $windowMock;
  var deferred;

  beforeEach(function() {
    $windowMock = { location: { href: jasmine.createSpy() } };
    userAuthFactoryMock = jasmine.createSpyObj(
      'userAuthFactory',
      ['register']
    );
    module('Jobber', {
      userAuthFactory: userAuthFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, _$q_, _$rootScope_) {
    ctrl = $controller('RegistrationController');
    $rootScope = _$rootScope_;
    $q = _$q_;
  }));

  describe('#register()', function() {
    beforeEach(function() {
      deferred = $q.defer();
    });

    it('calls .register() on userAuthFactory with params', function() {
      ctrl.email = 'mail@example.com';
      ctrl.password = 'passwordwin';
      ctrl.firstName = 'Example';
      ctrl.lastName = 'User';
      userAuthFactoryMock.register.and.returnValue($q.when({}));
      ctrl.register();
      $rootScope.$digest();
      expect(userAuthFactoryMock.register).toHaveBeenCalledWith(
        'mail@example.com',
        'passwordwin',
        'Example',
        'User'
      );
    });

    it('relocates to /login when receiving a resolved promise', function() {
      deferred.resolve();
      userAuthFactoryMock.register.and.returnValue(deferred.promise);
      ctrl.register();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/login');
    });

    it('sets the error message when receiving a rejected promise', function() {
      deferred.reject('Error Error Error');
      userAuthFactoryMock.register.and.returnValue(deferred.promise);
      ctrl.register();
      $rootScope.$digest();
      expect(ctrl.error).toEqual('Error Error Error');
    });
  });
});
