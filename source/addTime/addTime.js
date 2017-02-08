
(function() {

	angular.module('addTime', [])
		.component('addTime', {
			templateUrl: 'source/addTime/addTime.html',
			controller: addTimeController,
		});

	addTimeController.$inject = ['timeService'];
	function addTimeController(timeService) {
		var self = this;
		self.saveTime = () => {
			timeService.postTime(self.time).then(() => self.time = null);
		};
	}

}());
