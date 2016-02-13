describe('jobsResourceFactory', function() {
  var factory;
  var $httpBackend;

  beforeEach(module('Jobber'));

  beforeEach(inject(function(jobsResourceFactory, _$httpBackend_) {
    factory = jobsResourceFactory;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#postJobs()', function() {
    it('makes a POST request to /api/companies/:company_id/jobs', function() {
      $httpBackend.expectPOST('/api/companies/1/jobs').respond(201);
      factory.postJobs(1, 'Java Me');
      $httpBackend.flush();
    });
  });

  describe("#getJobByID()", function(){
    it("Makes a GET request to /api/companies/:company_id/jobs/:id", function(){
      $httpBackend.expectGET("/api/companies/3/jobs/5").respond(200);
      factory.getJobByID(3, 5);
      $httpBackend.flush();
    });
  });
});
