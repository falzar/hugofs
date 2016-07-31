import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

import { Intro } from '../intro';

@Component({
  selector: 'home',  // <home></home>
  providers: [
    Title
  ],
  directives: [
    XLarge,
    Intro
  ],
  pipes: [ ],
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class Home {
  localState = { value: '' };
  constructor(public appState: AppState, public title: Title) {}

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
