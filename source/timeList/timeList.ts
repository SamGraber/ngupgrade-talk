import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { downgradeComponent } from '@angular/upgrade/static';

import { TimeService } from '../services/time.service';
import { calculatePace, toDate, remove } from '../services/utility';

export interface IFormattedTimeEntry {
	id: number;
	pace: Date;
	time: Date;
	distance: number;
}

@Component({
	selector: 'time-list',
	templateUrl: './timeList.html',
})
export class TimeListComponent implements OnInit {
	timeList: IFormattedTimeEntry[];
	
	constructor(private timeService: TimeService) {}

	ngOnInit(): void {
		this.timeService.getTimeList().subscribe(data => this.timeList = data.map(this.setPace).map(this.formatTimes));
	}

	deleteTime(time: IFormattedTimeEntry): void {
		this.timeService.deleteTime(<any>time).subscribe(() => remove(this.timeList, time));
	}

	private setPace(time) {
		return {
			id: time.id,
			pace: calculatePace(time),
			time: time.time,
			distance: time.distance,
		};
	}

	private formatTimes(time) {
		return {
			id: time.id,
			pace: toDate(time.pace),
			time: toDate(time.time),
			distance: time.distance,
		};
	}
}

angular.module('timeList', [])
	.directive('timeList', downgradeComponent({
		component: TimeListComponent,
	}));

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: 'timelist', component: TimeListComponent }]),
	],
	declarations: [TimeListComponent],
	entryComponents: [TimeListComponent],
})
export class TimeListModule {}
