exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*Features.js'],
  capabilities: {
    browserName: 'phantomjs'
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};
