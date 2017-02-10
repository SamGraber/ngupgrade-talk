import { NgModule, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { ITimeEntry, TimeService } from '../services/time.service';

@Component({
	selector: 'add-time',
	templateUrl: './addTime.html',
})
export class AddTimeComponent {
	time: ITimeEntry = <any>{};
	
	constructor(private timeService: TimeService) {}

	saveTime(): void {
		this.timeService.postTime(this.time).subscribe(() => this.time = <any>{});
	}
}

angular.module('addTime', [])
	.directive('addTime', downgradeComponent({
		component: AddTimeComponent,
	}));

@NgModule({
	imports: [
		FormsModule, 
		UpgradeModule,
	],
	entryComponents: [AddTimeComponent],
	declarations: [AddTimeComponent],
	exports: [AddTimeComponent],
})
export class AddTimeModule {}
