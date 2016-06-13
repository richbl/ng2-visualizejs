import {Component} from '@angular/core';
import {VisualizeJS} from './vjs.main.component';

@Component({
  selector: 'vjs-app',
  directives: [VisualizeJS],
  templateUrl: `app/app.component.html`,
})

export class AppComponent {
}
