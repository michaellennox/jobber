describe('LoginController', function() {
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
      ['login']
    );
    module('Jobber', {
      userAuthFactory: userAuthFactoryMock,
      $window: $windowMock
    });
  });

  beforeEach(inject(function($controller, _$q_, _$rootScope_) {
    ctrl = $controller('LoginController');
    $rootScope = _$rootScope_;
    $q = _$q_;
  }));

  describe('#login()', function() {
    beforeEach(function() {
      deferred = $q.defer();
    });

    it('calls .login() on userAuthFactory with params', function() {
      ctrl.email = 'mail@example.com';
      ctrl.password = 'passwordwin';
      userAuthFactoryMock.login.and.returnValue($q.when({}));
      ctrl.login();
      $rootScope.$digest();
      expect(userAuthFactoryMock.login).toHaveBeenCalledWith(
        'mail@example.com',
        'passwordwin'
      );
    });

    it('relocates to /login when receiving a resolved promise', function() {
      deferred.resolve();
      userAuthFactoryMock.login.and.returnValue(deferred.promise);
      ctrl.login();
      $rootScope.$digest();
      expect($windowMock.location.href).toEqual('/companies');
    });

    it('sets the error message when receiving a rejected promise', function() {
      deferred.reject('Error Error Error');
      userAuthFactoryMock.login.and.returnValue(deferred.promise);
      ctrl.login();
      $rootScope.$digest();
      expect(ctrl.error).toEqual('Error Error Error');
    });
  });
});
