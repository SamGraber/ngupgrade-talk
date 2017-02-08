
(function() {
		
	angular.module('timeService', [])
		.service('timeService', timeService);

	var baseUrl = 'http://localhost:3000';

	timeService.$inject = ['$http'];
	function timeService($http) {
		var self = this;
		this.getTimeList = () => $http.get(baseUrl + '/time').then(response => response.data);
		this.postTime = time => $http.post(baseUrl + '/time', time).then(response => response.data);
		this.deleteTime = time => $http.delete(baseUrl + '/time/' + time.id);
	}

}());
