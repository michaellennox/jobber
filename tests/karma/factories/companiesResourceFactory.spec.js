describe('companiesResourceFactory', function() {
  var factory;
  var $httpBackend;

  beforeEach(module('Jobber'));

  beforeEach(inject(function(companiesResourceFactory) {
    factory = companiesResourceFactory;
  }));

  beforeEach(inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend
      .whenGET('/api/companies').respond([{
        id: 'random ID',
        name: 'random name'
      }]);
    $httpBackend
      .whenPOST('/api/companies').respond({
        message: 'Company created!'
      });
    $httpBackend
      .whenGET('/api/companies/1').respond({
        id: 1,
        name: 'makers'
      });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getCompanies()', function() {
    it('makes a GET request to /api/companies', function() {
      factory.getCompanies()
        .then(function(response) {
          expect(response.data[0]).toEqual({
            id: 'random ID',
            name: 'random name'
          });
        });
      $httpBackend.flush();
    });
  });

  describe('#postCompanies()', function() {
    it('makes a POST request to /api/companies', function() {
      factory.postCompanies('a name')
        .then(function(response) {
          expect(response.data).toEqual({
            message: 'Company created!'
          });
        });
      $httpBackend.flush();
    });
  });

  describe('#getCompanyByID()', function() {
    it('makes a GET request to /api/companies/:id', function() {
      factory.getCompanyByID(1)
        .then(function(response) {
          expect(response.data).toEqual({
            id: 1,
            name: 'makers'
          });
        });
      $httpBackend.flush();
    });
  });
});
