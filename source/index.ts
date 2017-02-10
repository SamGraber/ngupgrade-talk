import './app.module';
import './app.config';
import './timeList/timeList';
import './addTime/addTime';
import './goal/goal';
import './services/time.service';
import './services/goal.service';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
	// bootstrap angular1
	(<any>ref.instance).upgrade.bootstrap(document.body, ['runCalculatorApp']);
});
