import { toDate } from '../services/utility';

describe('goalController', () => {
	var ctrl;
	var goalService;
	var timeService;

	beforeEach(() => {
		angular.mock.module('goal');
		var initialGoal = 6;
		var initialTimeList = [{ time: 4, distance: 2 }];
		goalService = { 
			getGoal: sinon.spy(() => ({ then: x => x(initialGoal) })),
			putGoal: sinon.spy(() => ({ then: x => x() })),
		};
		timeService = { getTimeList: sinon.spy(() => ({ then: x => x(initialTimeList) })) }
		inject($componentController => {
			ctrl = $componentController('goal', { goalService, timeService });
		});

		sinon.assert.calledOnce(goalService.getGoal);
		sinon.assert.calledOnce(timeService.getTimeList);
		expect(ctrl.goal).to.deep.equal(toDate(initialGoal));
		expect(ctrl.averagePace).to.deep.equal(toDate(2));
	});
	
	it('should get the average pace minus the goal as a date', () => {
		ctrl.averagePace = 3;
		ctrl.goal = 2;

		var result = ctrl.averageMinusGoal();

		expect(result).to.deep.equal(new Date(1));
	});
	
	it('should save the pending goal and set the goal value on the controller', () => {
		ctrl.goal = null;
		var goal = 3;
		ctrl.pendingGoal = goal;
		
		ctrl.setGoal();

		sinon.assert.calledOnce(goalService.putGoal);
		expect(goalService.putGoal.firstCall.args[0]).to.equal(goal);
		expect(ctrl.pendingGoal).to.be.null;
		expect(ctrl.goal.getMinutes()).to.equal(goal);
	});
	
	it('should make a request to clear the goal and clear it on the controller', () => {
		ctrl.clearGoal();

		sinon.assert.calledOnce(goalService.putGoal);
		expect(goalService.putGoal.firstCall.args[0]).to.be.null;
		expect(ctrl.goal).to.be.null;
	});
});
