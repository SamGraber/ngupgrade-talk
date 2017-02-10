Error.stackTraceLimit = Infinity;

require('angular/angular.js');
require('angular-mocks/angular-mocks.js');

require('../source/index');

window.expect = chai.expect;

var appContext = require.context('../source', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);
