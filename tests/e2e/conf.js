exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['userAuth_feature.spec.js'],
  capabilities: {
    browserName: 'firefox'
  },
  jasmineNodeOpts: {
    showColors: true,
  }
};
