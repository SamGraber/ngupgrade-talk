import { NgModule, Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs';

export interface ITimeEntry {
	id: number;
	time: number;
	distance: number;
}

const baseUrl = 'http://localhost:3000';

@Injectable()
export class TimeService {
	constructor(private http: Http) {}

	getTimeList(): Observable<ITimeEntry[]> {
		return this.http.get(baseUrl + '/time').map(response => response.json());
	}

	postTime(time: ITimeEntry): Observable<ITimeEntry> {
		return this.http.post(baseUrl + '/time', time).map(response => response.json());
	}

	deleteTime(time: ITimeEntry): Observable<void> {
		return this.http.delete(baseUrl + '/time/' + time.id).map(() => null);
	}
}

@NgModule({
	imports: [
		HttpModule,
	],
	providers: [
		TimeService,
	],
})
export class TimeServiceModule {}
