module.exports = function(karma) {
	karma.set(baseConfig(karma));
};

function baseConfig(karma) {
	return {
		basePath: '..',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', 'chai', 'sinon'],

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// level of logging
		// possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
		logLevel: karma.LOG_INFO,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		port: 2000,

		plugins: [
			require('karma-jasmine'),
			require('karma-chai'),
			require('karma-sinon'),
			require('karma-chrome-launcher')
		],

		files: [
			{ pattern: 'node_modules/angular/angular.js', included: true, watched: true },
			{ pattern: 'node_modules/angular-mocks/angular-mocks.js', included: true, watched: true },
			{ pattern: 'config/karma-test-setup.js', included: true, watched: true },
			// { pattern: 'source/**/*.spec.js', included: true, watched: true },
			{ pattern: 'source/app.module.js', included: true, watched: true },
			{ pattern: 'source/**/*', included: true, watched: true },
		],
	};
};
