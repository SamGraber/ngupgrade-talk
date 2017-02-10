import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

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
	],
	bootstrap: [App],
	declarations: [App],
})
export class AppModule {
	constructor(public upgrade: UpgradeModule) {}
}
