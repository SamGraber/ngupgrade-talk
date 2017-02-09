
angular.module('timeList', [])
	.component('timeList', {
		templateUrl: 'source/timeList/timeList.html',
		controller: timeListController,
	});

timeListController.$inject = ['timeService'];
function timeListController(timeService) {
	var self = this;
	timeService.getTimeList().then(data => self.timeList = data.map(setPace).map(formatTimes));

	self.deleteTime = time => {
		timeService.deleteTime(time).then(() => remove(self.timeList, time));
	};

	function setPace(time) {
		return {
			id: time.id,
			pace: calculatePace(time),
			time: time.time,
			distance: time.distance,
		};
	}

	function formatTimes(time) {
		return {
			id: time.id,
			pace: toDate(time.pace),
			time: toDate(time.time),
			distance: time.distance,
		};
	}
}
