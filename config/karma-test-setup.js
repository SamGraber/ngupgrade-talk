Error.stackTraceLimit = Infinity;

require('angular/angular.js');
require('angular-mocks/angular-mocks.js');

require('core-js/es6');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

require('../source/timeList/timeList');
require('../source/goal/goal');

window.expect = chai.expect;

var appContext = require.context('../source', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);
