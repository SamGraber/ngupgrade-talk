import { Subject } from 'rxjs';

import { GoalService } from './goal.service';

describe('GoalService', () => {
	let service: GoalService;
	let http;

	beforeEach(() => {
		http = {
			get: sinon.spy(() => http.getStream),
			getStream: new Subject(),
			put: sinon.spy(() => http.putStream),
			putStream: new Subject(),
		};
		service = new GoalService(http);
	});

	it('should make a request to get the user\'s goal', () => {
		const goal = 5;
		let result;

		service.getGoal().subscribe(data => result = data);

		sinon.assert.calledOnce(http.get);

		http.getStream.next({ json: () => ({ goal }) });

		expect(result).to.equal(goal);
	});

	it('should make a request to set the goal', () => {
		const goal = 5;
		let result;

		service.putGoal(goal).subscribe(data => result = data);

		sinon.assert.calledOnce(http.put);

		http.putStream.next({ json: () => ({ goal }) });

		expect(result).to.equal(goal);
	});
});
