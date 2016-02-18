describe('companiesResourceFactory', function() {
  var factory;
  var $httpBackend;

  beforeEach(module('Jobber'));

  beforeEach(inject(function(companiesResourceFactory, _$httpBackend_) {
    factory = companiesResourceFactory;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getCompanies()', function() {
    it('makes a GET request to /api/companies', function() {
      $httpBackend.expectGET('/api/companies').respond(200);
      factory.getCompanies();
      $httpBackend.flush();
    });
  });

  describe('#postCompanies()', function() {
    it('makes a POST request to /api/companies', function() {
      $httpBackend.expectPOST('/api/companies').respond(201);
      factory.postCompanies('a name', 'named', 'name.com', 'Names', 'Name St.', '1', 'NamePic');
      $httpBackend.flush();
    });
  });

  describe("#deleteCompanyByID()", function(){
    it("makes a DELETE request to api/companies/:company_id", function(){
      $httpBackend.expectDELETE("/api/companies/666").respond(204);
      factory.deleteCompanyByID(666);
      $httpBackend.flush();
    });
  });

  describe("#getCompanyFromLinkedin", function(){
    it("makes a post request to /web/companies", function(){
      $httpBackend.expectPOST('/web/companies').respond(201);
      factory.getCompanyFromLinkedin('test');
      $httpBackend.flush();
    });
  });

  describe('#getCompanyByID()', function() {
    it('makes a GET request to /api/companies/:id', function() {
      $httpBackend.expectGET('/api/companies/1').respond(200);
      factory.getCompanyByID(1);
      $httpBackend.flush();
    });
  });
});
