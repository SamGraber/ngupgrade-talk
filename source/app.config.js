(function() {

	angular.module('runCalculatorApp')
		.config(config)

	config.$inject = ['$locationProvider', '$routeProvider'];
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/home', {
			template: '<h1>Welcome!</h1',
		})
		.when('/timelist', {
			template: '<time-list></time-list>',
		})
		.otherwise('/home');
	};
	
}());
