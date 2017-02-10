import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

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

export function upgradeTimeService(module: UpgradeModule): any {
	return module.$injector.get('timeService');
}

@NgModule({
	providers: [
		{ provide: 'timeService', useFactory: upgradeTimeService, deps: [UpgradeModule] },
	],
})
export class TimeServiceModule {}
