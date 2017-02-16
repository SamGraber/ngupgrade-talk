import { NgModule, Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000';

@Injectable()
export class GoalService {
	constructor(private http: Http) {}

	getGoal(): Observable<number> {
		return this.http.get(baseUrl + '/goal').map(response => response.json().goal);
	}

	putGoal(goal: number): Observable<number> {
		return this.http.put(baseUrl + '/goal', { goal }).map(response => response.json().goal);
	}
}

@NgModule({
	imports: [HttpModule],
	providers: [GoalService],
})
export class GoalServiceModule {}
