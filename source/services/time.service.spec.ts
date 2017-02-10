import { Subject } from 'rxjs';

import { TimeService } from './time.service';

describe('TimeService', () => {
	let service: TimeService;
	let http;

	beforeEach(() => {
		http = {
			get: sinon.spy(() => http.getStream),
			getStream: new Subject(),
			post: sinon.spy(() => http.postStream),
			postStream: new Subject(),
			delete: sinon.spy(() => http.deleteStream),
			deleteStream: new Subject(),
		};
		service = new TimeService(http);
	});

	it('should make a request to get the list of times', () => {
		const data = [1, 2, 3];
		let result;

		service.getTimeList().subscribe(data => result = data);

		sinon.assert.calledOnce(http.get);

		http.getStream.next({ json: () => data });

		expect(result).to.equal(data);
	});

	it('should make a request to save a time entry', () => {
		const timeEntry: any = { time: 3 };
		let result;

		service.postTime(timeEntry).subscribe(data => result = data);

		sinon.assert.calledOnce(http.post);

		http.postStream.next({ json: () => timeEntry });

		expect(result).to.equal(timeEntry);
	});

	it('should make a request to delete a time entry', () => {
		const timeEntry: any = { id: 3 };

		service.deleteTime(timeEntry);

		sinon.assert.calledOnce(http.delete);
	});
});
