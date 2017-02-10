import { NgModule, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

@Component({
	selector: 'add-time',
	templateUrl: './addTime.html',
})
export class AddTimeComponent {
	time: any = {};
	
	constructor(@Inject('timeService') private timeService: any) {}

	saveTime(): void {
		this.timeService.postTime(this.time).then(() => this.time = {});
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
