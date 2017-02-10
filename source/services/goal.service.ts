import { NgModule } from '@angular/core';

angular.module('goalService', [])
	.service('goalService', goalService);

var baseUrl = 'http://localhost:3000';

goalService.$inject = ['$http'];
function goalService($http) {
	var self = this;
	this.getGoal = () => $http.get(baseUrl + '/goal').then(response => response.data.goal);
	this.putGoal = goal => $http.put(baseUrl + '/goal', { goal }).then(response => response.data.goal);
}

@NgModule({})
export class GoalServiceModule {}
