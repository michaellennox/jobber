describe('userAuthFactory', function() {
  var factory;
  var $httpBackend;
  var $rootScope;

  beforeEach(module('Jobber'));

  beforeEach(inject(function(userAuthFactory, _$httpBackend_, _$rootScope_) {
    factory = userAuthFactory;
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#isLoggedIn()', function() {
    it('returns false when not logged in', function() {
      expect(factory.isLoggedIn()).toBe(false);
    });

    it('returns true when logged in', function() {
      factory._user = 'user';
      expect(factory.isLoggedIn()).toBe(true);
    });
  });

  describe('#login()', function() {
    describe('when receives 200 status code', function() {
      beforeEach(function() {
        $httpBackend.expectPOST('/api/sessions')
          .respond(200, {user: 'Epic User'});
      });

      it('logs user in', function() {
        factory.login('example@example.com', 'epicpword');
        $httpBackend.flush();
        $rootScope.$digest();
        expect(factory.isLoggedIn()).toBe(true);
      });

      it('returns resolved promise', function() {
        var handler = jasmine.createSpy('success');
        factory.login('example@example.com', 'epicpword')
          .then(handler);
        $httpBackend.flush();
        $rootScope.$digest();
        expect(handler).toHaveBeenCalled();
      });
    });

    describe('when receives 400 status code', function() {
      beforeEach(function() {
        $httpBackend.expectPOST('/api/sessions')
          .respond(400, 'Error Message');
      });

      it('does not log user in', function() {
        factory.login('failure@example.com', 'awfulpword');
        $httpBackend.flush();
        $rootScope.$digest();
        expect(factory.isLoggedIn()).toBe(false);
      });

      it('returns a rejected promise with err message', function() {
        var handler = jasmine.createSpy('failure');
        factory.login('abaduser@example.com', 'awfulpword')
          .catch(handler);
        $httpBackend.flush();
        $rootScope.$digest();
        expect(handler).toHaveBeenCalledWith('Error Message');
      });
    });
  });

  describe('#logout()', function() {
    it('logs a user out', function() {
      $httpBackend.expectDELETE('/api/sessions').respond(200);
      factory._user = 'User Is Logged In';
      factory.logout();
      $httpBackend.flush();
      expect(factory.isLoggedIn()).toBe(false);
    });
  });

  describe('#register()', function() {
    describe('when receives 201 status code', function() {
      beforeEach(function() {
        $httpBackend.expectPOST('/api/users').respond(201);
      });

      it('returns a resolved promise', function() {
        var handler = jasmine.createSpy('success');
        factory.register(
          'example@example.com',
          'pwordwins',
          'Example',
          'Human'
        ).then(handler);
        $httpBackend.flush();
        $rootScope.$digest();
        expect(handler).toHaveBeenCalled();
      });
    });

    describe('when receives 400 status code', function() {
      beforeEach(function() {
        $httpBackend.expectPOST('/api/users')
          .respond(400, 'Error Message');
      });

      it('returns a rejected promise with err message', function() {
        var handler = jasmine.createSpy('failure');
        factory.register(
          'abaduser@example.com',
          'awfulpword',
          'Unknown',
          'MehCreature'
        ).catch(handler);
        $httpBackend.flush();
        $rootScope.$digest();
        expect(handler).toHaveBeenCalledWith('Error Message');
      });
    });
  });

  describe('#currentUser()', function() {
    it('returns the current user', function() {
      factory._user = 'Epic Example User';
      expect(factory.currentUser()).toEqual('Epic Example User');
    });
  });
});
