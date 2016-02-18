describe('jobsResourceFactory', function() {
  var factory,
      $httpBackend;

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

  describe("#deleteJobByID()", function(){
    it("makes a DELETE request to api/companies/:company_id/jobs/:id", function(){
      $httpBackend.expectDELETE("/api/companies/666/jobs/66").respond(204);
      factory.deleteJobByID(666, 66);
      $httpBackend.flush();
    });
  });

  describe("#getJobByID()", function(){
    it("Makes a GET request to /api/companies/:company_id/jobs/:id", function() {
      $httpBackend.expectGET("/api/companies/3/jobs/5").respond(200);
      factory.getJobByID(3, 5);
      $httpBackend.flush();
    });
  });

  describe('#getJobsFromWeb()', function() {
    it('makes a POST request to /web/jobs', function() {
      $httpBackend.expectPOST("/web/jobs").respond(200);
      factory.getJobsFromWeb();
      $httpBackend.flush();
    });
  });
});
