describe('peopleResourceFactory', function() {
  var factory;
  var $httpBackend;

  beforeEach(module('Jobber'));

  beforeEach(inject(function(peopleResourceFactory, _$httpBackend_) {
    factory = peopleResourceFactory;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#postPeople()', function() {
    it('makes a POST request to /api/companies/:name/people', function() {
      $httpBackend
      .whenPOST('/api/companies/company/people').respond({
        message: 'Person created!'
      });
      factory.postPeople('person name', 'company')
        .then(function(response) {
          expect(response.data).toEqual({
            message: 'Person created!'
          });
        });
      $httpBackend.flush();
    });
  });
});
