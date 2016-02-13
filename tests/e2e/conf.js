exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features.spec.js'],
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};
