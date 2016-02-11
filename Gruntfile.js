var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        configFile: './test/front_end/karma.conf.js'
      },
      run: {
      }
    },
    protractor: {
      options: {
        configFile: './test/e2e/conf.js',
        keepAlive: true
      },
      run: {
      }
    },
    protractor_webdriver: {
      start: {
        options: {
          path: 'node_modules/protractor/bin/',
          command: 'webdriver-manager start'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.registerTask('e2e', ['protractor_webdriver', 'protractor']);
  grunt.registerTask('test', ['karma', 'e2e']);

};
