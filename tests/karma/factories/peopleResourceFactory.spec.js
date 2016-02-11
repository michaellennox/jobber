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
      $httpBackend
        .whenPOST('/api/companies/1/people').respond({
          message: 'Person created!'
        });
      factory.postPeople('person name', 1)
        .then(function(response) {
          expect(response.data).toEqual({
            message: 'Person created!'
          });
        });
      $httpBackend.flush();
    });
  });
  describe("#getPersonByID()", function(){
    it("Makes a get request to /api/companies/:company_id/people/:id", function(){
      $httpBackend
        .whenGET("/api/companies/1/people/5").respond({
          message: "Jeff lives at home"
        });
      factory.getPersonByID(5, 1)
        .then(function(response){
          expect(response.data).toEqual({
            message: "Jeff lives at home"
          });
        });
      $httpBackend.flush();
    });
  });

});
