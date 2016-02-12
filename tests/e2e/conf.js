exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features.spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};
