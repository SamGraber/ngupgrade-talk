
(function() {

	angular.module('timeList', [])
		.component('timeList', {
			templateUrl: 'source/timeList/timeList.html',
			controller: timeListController,
		});

	timeListController.$inject = ['timeService'];
	function timeListController(timeService) {
		var self = this;
		timeService.getTimeList().then(data => self.timeList = data.map(calculatePace).map(formatTimes));

		function calculatePace(time) {
			var pace = time.time / time.distance;
			return {
				pace,
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

		function toDate(minutes) {
			return new Date(minutes * 60000);
		}
	}

}());
