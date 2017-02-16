import { NgModule, Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

@NgModule({
	imports: [
		FormsModule, 
		RouterModule.forChild([{ path: 'addtime', component: AddTimeComponent }]),
	],
	entryComponents: [AddTimeComponent],
	declarations: [AddTimeComponent],
	exports: [AddTimeComponent],
})
export class AddTimeModule {}
