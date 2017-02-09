angular.module('runCalculatorApp')
	.config(config)

config.$inject = ['$locationProvider', '$routeProvider'];
function config($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.when('/home', {
		template: '<h3>Welcome!</h3>' +
		'<p><a href="#!addtime">Add time</a> to begin.</p>',
	})
	.when('/timelist', {
		template: '<time-list></time-list>',
	})
	.when('/addtime', {
		template: '<add-time></add-time>',
	})
	.when('/goal', {
		template: '<goal></goal>',
	})
	.otherwise('/home');
};
