import { Component } from '@angular/core';

@Component({
	selector: 'welcome',
	template: `
		<h3>Welcome!</h3>
		<p><a routerLink="/addtime">Add time</a> to begin.</p>
	`,
})
export class WelcomeComponent {}
