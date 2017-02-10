var webpackConfig = require('./webpack.config.test');

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
			require('karma-chrome-launcher'),
			require('karma-webpack'),
			require('karma-sourcemap-loader'),
		],

		files: [
			{ pattern: 'config/karma-test-setup.js', included: true, watched: true },
		],

		preprocessors: {
			'./config/karma-test-setup.js': ['webpack', 'sourcemap'],
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			stats: 'errors-only',
		},

		webpackServer: {
			noInfo: true,
		},
	};
};
