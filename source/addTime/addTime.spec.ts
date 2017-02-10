describe('addTimeController', () => {
	var ctrl;
	var timeService;

	beforeEach(() => {
		angular.mock.module('addTime');
		timeService = { postTime: sinon.spy(() => ({ then: x => x() })) }
		inject($componentController => {
			ctrl = $componentController('addTime', { timeService });
		});
	});
	
	it('should save the current time entry and then clear it', () => {
		var time = {};
		ctrl.time = time;
		
		ctrl.saveTime();

		sinon.assert.calledOnce(timeService.postTime);
		expect(timeService.postTime.firstCall.args[0]).to.equal(time);
		expect(ctrl.time).to.be.null;
	});
});
