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
      $httpBackend
        .whenPOST('/api/companies/1/jobs').respond({
          message: 'Job Created!'
        });
      factory.postJobs('Java Me', 1)
        .then(function(response) {
          expect(response.data).toEqual({
            message: 'Job Created!'
          });
        });
      $httpBackend.flush();
    });
  });

  describe("#getJobByID()", function(){
    it("Makes a get request to /api/companies/:company_id/jobs/:id", function(){
      $httpBackend
        .whenGET("/api/companies/3/jobs/5").respond({
          message: "Job Info is Epic"
        });
      factory.getJobByID(5, 3)
        .then(function(response){
          expect(response.data).toEqual({
            message: "Job Info is Epic"
          });
        });
      $httpBackend.flush();
    });
  });
});
