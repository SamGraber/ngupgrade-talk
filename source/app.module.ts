import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { TimeListModule } from './timeList/timeList';
import { AddTimeModule } from './addTime/addTime';
import { GoalModule } from './goal/goal';
import { TimeServiceModule } from './services/time.service';
import { GoalServiceModule } from './services/goal.service';

import { App } from './app';
import { WelcomeComponent } from './welcome';

const appRoutes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: WelcomeComponent },
];

@NgModule({
	imports: [
		BrowserModule,

		RouterModule.forRoot(appRoutes, { useHash: true, initialNavigation: true }),

		TimeListModule,
		AddTimeModule,
		GoalModule,
		TimeServiceModule,
		GoalServiceModule,
	],
	bootstrap: [App],
	declarations: [App, WelcomeComponent],
})
export class AppModule {}
