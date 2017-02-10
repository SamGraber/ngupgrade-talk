import { NgModule } from '@angular/core';

angular.module('timeService', [])
	.service('timeService', timeService);

var baseUrl = 'http://localhost:3000';

timeService.$inject = ['$http'];
function timeService($http) {
	var self = this;
	self.$http = $http;
	this.getTimeList = () => self.$http.get(baseUrl + '/time').then(response => response.data);
	this.postTime = time => self.$http.post(baseUrl + '/time', time).then(response => response.data);
	this.deleteTime = time => self.$http.delete(baseUrl + '/time/' + time.id);
}

@NgModule({})
export class TimeServiceModule {}
