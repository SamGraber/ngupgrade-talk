import { AddTimeComponent } from './addTime';

describe('AddTimeComponent', () => {
	let component: AddTimeComponent;
	let timeService;

	beforeEach(() => {
		timeService = { 
			postTime: sinon.spy(() => ({ then: x => x() })),
		};
		component = new AddTimeComponent(timeService);
	});
	
	it('should save the current time entry and then clear it', () => {
		const time = { time: 2 };
		component.time = time;
		
		component.saveTime();

		sinon.assert.calledOnce(timeService.postTime);
		expect(timeService.postTime.firstCall.args[0]).to.equal(time);
		expect(component.time).to.be.empty;
	});
});
