angular.module('runCalculatorApp')
	.config(config)

config.$inject = ['$locationProvider', '$routeProvider'];
function config($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider.when('/home', {})
	.when('/timelist', {})
	.when('/addtime', {
		template: '<add-time></add-time>',
	})
	.when('/goal', {
		template: '<goal></goal>',
	});
};
