import { NgModule } from '@angular/core';

import { calculatePace, toDate } from '../services/utility';

angular.module('goal', [])
	.component('goal', {
		templateUrl: './goal.html',
		controller: goalController,
	});

goalController.$inject = ['goalService', 'timeService'];
function goalController(goalService, timeService) {
	var self = this;
	goalService.getGoal().then(goal => self.goal = toDate(goal));
	timeService.getTimeList().subscribe(timeList => {
		self.averagePace = toDate(average(timeList));
	});

	self.averageMinusGoal = () => new Date(self.averagePace - self.goal);

	self.setGoal = () => {
		goalService.putGoal(self.pendingGoal).then(() => {
			self.goal = toDate(self.pendingGoal);
			self.pendingGoal = null;
		});
	};

	self.clearGoal = () => {
		goalService.putGoal(null).then(() => self.goal = null);
	};

	function average(timeList) {
		var total = timeList.reduce((accum, time) => accum + calculatePace(time), 0);
		return total / timeList.length;
	}
}

@NgModule({})
export class GoalModule {}
