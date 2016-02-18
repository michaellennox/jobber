describe('applicationsResourceFactory', function() {
  var factory;
  var $httpBackend;

  beforeEach(module('Jobber'));

  beforeEach(inject(function(applicationsResourceFactory, _$httpBackend_) {
    factory = applicationsResourceFactory;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getApplications()', function() {
    it('makes a GET request to /api/applications', function() {
      $httpBackend.expectGET('/api/applications').respond(200);
      factory.getApplications();
      $httpBackend.flush();
    });
  });

  describe('#postApplications()', function() {
    it('makes a POST request to /api/applications', function() {
      $httpBackend.expectPOST('/api/applications').respond(201);
      factory.postApplications('company_id');
      $httpBackend.flush();
    });
  });

});
