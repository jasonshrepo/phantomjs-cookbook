module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['../lib/string-utils*.js'],
    preprocessors: {
      '../lib/string-utils.js': 'coverage'
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    browsers: ['PhantomJS'],
    singleRun: true
  });
};