
(function() {

	angular.module('timeList', [])
		.component('timeList', {
			templateUrl: 'source/timeList/timeList.html',
			controller: timeListController,
		});

	timeListController.$inject = ['timeService'];
	function timeListController(timeService) {
		var self = this;
		timeService.getTimeList().then(data => self.timeList = data);
	}

}());
