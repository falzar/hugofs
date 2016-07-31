import { Component, ViewEncapsulation } from '@angular/core';
import { Intro } from './intro';

import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [ Intro ],
  styleUrls: [
    './app.style.css'
  ],
  templateUrl: './app.template.html'
})
export class App {
  loading = false;

  constructor() {}

}
