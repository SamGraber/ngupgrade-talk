import { toDate } from '../services/utility';
import { TimeListComponent } from './timeList';

describe('TimeListComponent', () => {
	let component: TimeListComponent;
	let timeService;

	beforeEach(() => {
		timeService = { 
			getTimeList: sinon.spy(),
			deleteTime: sinon.spy(() => ({ subscribe: x => x() })),
		};
		component = new TimeListComponent(timeService);
	});

	it('should get the list of time entries', () => {
		let initialTimeList = [{ id: 11, time: 4, distance: 2 }];
		let expectedList = [{ id: 11, pace: toDate(2), time: toDate(4), distance: 2 }];
		timeService.getTimeList = sinon.spy(() => ({ subscribe: x => x(initialTimeList) }));

		component.ngOnInit();
		
		sinon.assert.calledOnce(timeService.getTimeList);
		expect(component.timeList).to.deep.equal(expectedList);
	});
	
	it('should delete the time entry and remove it from the list', () => {
		component.timeList = <any>[1, 2, 3];

		component.deleteTime(<any>2);

		sinon.assert.calledOnce(timeService.deleteTime);
		expect(component.timeList).to.deep.equal([1, 3]);
	});
});
