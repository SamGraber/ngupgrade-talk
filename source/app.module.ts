import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

import { TimeListModule } from './timeList/timeList';
import { AddTimeModule } from './addTime/addTime';
import { GoalModule } from './goal/goal';
import { TimeServiceModule } from './services/time.service';
import { GoalServiceModule } from './services/goal.service';

import { App } from './app';

angular.module('runCalculatorApp', [
	'ngRoute',

	'timeList',
	'addTime',
	'goal',
	'timeService',
	'goalService',
]);

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
	shouldProcessUrl(url) {
		return url.toString().startsWith('/timelist');
	}
	extract(url) { return url; }
	merge(url, whole) { return url; }
}

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule,

		RouterModule.forRoot([], { useHash: true, initialNavigation: false }),

		TimeListModule,
		AddTimeModule,
		GoalModule,
		TimeServiceModule,
		GoalServiceModule,
	],
	bootstrap: [App],
	declarations: [App],
	providers: [
		{ provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
	],
})
export class AppModule {
	constructor(public upgrade: UpgradeModule) { }
}
