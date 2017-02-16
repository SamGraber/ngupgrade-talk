import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GoalService } from '../services/goal.service';
import { TimeService, ITimeEntry } from '../services/time.service';
import { calculatePace, toDate } from '../services/utility';

@Component({
	selector: 'goal',
	templateUrl: './goal.html',
})
export class GoalComponent implements OnInit {
	goal: Date;
	averagePace: Date;
	pendingGoal: number;
	
	constructor(private goalService: GoalService
			, private timeService: TimeService) {}

	ngOnInit(): void {
		this.goalService.getGoal().subscribe(goal => this.goal = goal ? toDate(goal) : null);
		this.timeService.getTimeList().subscribe(timeList => {
			this.averagePace = toDate(this.average(timeList));
		});
	}

	averageMinusGoal(): Date {
		if (!this.averagePace || !this.goal) {
			return new Date(0);
		}

		return new Date(this.averagePace.getTime() - this.goal.getTime());
	}

	setGoal(): void {
		this.goalService.putGoal(this.pendingGoal).subscribe(() => {
			this.goal = toDate(this.pendingGoal);
			this.pendingGoal = null;
		});
	}

	clearGoal(): void {
		this.goalService.putGoal(null).subscribe(() => this.goal = null);
	}

	private average(timeList) {
		const total = timeList.reduce((accum, time) => accum + calculatePace(time), 0);
		return total / timeList.length;
	}
}

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: 'goal', component: GoalComponent }]),
	],
	declarations: [GoalComponent],
	entryComponents: [GoalComponent],
})
export class GoalModule {}
