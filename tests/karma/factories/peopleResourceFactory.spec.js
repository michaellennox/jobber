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
    it('makes a POST request to /api/companies/:company_id/people', function() {
      $httpBackend.expectPOST('/api/companies/1/people').respond(201);
      factory.postPeople(1, 'person name');
      $httpBackend.flush();
    });
  });

  describe("#getPersonByID()", function(){
    it("Makes a GET request to /api/companies/:company_id/people/:id", function(){
      $httpBackend.expectGET("/api/companies/1/people/5").respond(200);
      factory.getPersonByID(1, 5);
      $httpBackend.flush();
    });
  });
});
