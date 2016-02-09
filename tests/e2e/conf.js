exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['indexFeatures.js'],
  capabilities: {
    browserName: 'phantomjs'
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};
