
(function() {

	angular.module('timeList', [])
		.component('timeList', {
			templateUrl: 'source/timeList/timeList.html',
			controller: timeListController,
		});

	timeListController.$inject = ['timeService'];
	function timeListController(timeService) {
		var self = this;
		timeService.getTimeList().then(data => self.timeList = data.map(setPace).map(formatTimes));

		function setPace(time) {
			return {
				pace: calculatePace(time),
				time: time.time,
				distance: time.distance,
			};
		}

		function formatTimes(time) {
			return {
				pace: toDate(time.pace),
				time: toDate(time.time),
				distance: time.distance,
			};
		}
	}

}());
