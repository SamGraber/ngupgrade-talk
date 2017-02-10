import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

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

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule,

		TimeListModule,
		AddTimeModule,
		GoalModule,
		TimeServiceModule,
		GoalServiceModule,
	],
	bootstrap: [App],
	declarations: [App],
})
export class AppModule {
	constructor(public upgrade: UpgradeModule) {}
}
