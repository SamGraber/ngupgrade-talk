import { toDate } from '../services/utility';
import { GoalComponent } from './goal';

describe('GoalComponent', () => {
	let component: GoalComponent;
	let goalService;
	let timeService;

	beforeEach(() => {
		goalService = { 
			getGoal: sinon.spy(),
			putGoal: sinon.spy(() => ({ subscribe: x => x() })),
		};
		timeService = { getTimeList: sinon.spy() }
		component = new GoalComponent(goalService, timeService);
	});

	it('should get the goal and average time on init', () => {
		let initialGoal = 6;
		let initialTimeList = [{ time: 4, distance: 2 }];
		goalService.getGoal = sinon.spy(() => ({ subscribe: x => x(initialGoal) }));
		timeService.getTimeList = sinon.spy(() => ({ subscribe: x => x(initialTimeList) }));
		
		component.ngOnInit();

		sinon.assert.calledOnce(goalService.getGoal);
		sinon.assert.calledOnce(timeService.getTimeList);
		expect(component.goal).to.deep.equal(toDate(initialGoal));
		expect(component.averagePace).to.deep.equal(toDate(2));
	});
	
	it('should get the average pace minus the goal as a date', () => {
		component.averagePace = new Date(3);
		component.goal = new Date(2);

		let result = component.averageMinusGoal();

		expect(result).to.deep.equal(new Date(1));
	});
	
	it('should save the pending goal and set the goal value on the controller', () => {
		component.goal = null;
		let goal = 3;
		component.pendingGoal = goal;
		
		component.setGoal();

		sinon.assert.calledOnce(goalService.putGoal);
		expect(goalService.putGoal.firstCall.args[0]).to.equal(goal);
		expect(component.pendingGoal).to.be.null;
		expect(component.goal.getMinutes()).to.equal(goal);
	});
	
	it('should make a request to clear the goal and clear it on the controller', () => {
		component.clearGoal();

		sinon.assert.calledOnce(goalService.putGoal);
		expect(goalService.putGoal.firstCall.args[0]).to.be.null;
		expect(component.goal).to.be.null;
	});
});
