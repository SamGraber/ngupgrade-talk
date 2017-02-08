describe('timeListController', () => {
	var ctrl;
	var timeService;

	beforeEach(() => {
		module('timeList');
		var initialTimeList = [{ id: 11, time: 4, distance: 2 }];
		var expectedList = [{ id: 11, pace: toDate(2), time: toDate(4), distance: 2 }];
		timeService = { 
			getTimeList: sinon.spy(() => ({ then: x => x(initialTimeList) })),
			deleteTime: sinon.spy(() => ({ then: x => x() })),
		};
		inject($componentController => {
			ctrl = $componentController('timeList', { timeService });
		});

		sinon.assert.calledOnce(timeService.getTimeList);
		expect(ctrl.timeList).to.deep.equal(expectedList);
	});
	
	it('should delete the time entry and remove it from the list', () => {
		ctrl.timeList = [1, 2, 3];

		ctrl.deleteTime(2);

		sinon.assert.calledOnce(timeService.deleteTime);
		expect(ctrl.timeList).to.deep.equal([1, 3]);
	});
});
