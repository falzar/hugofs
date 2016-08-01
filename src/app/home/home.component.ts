import { Component } from '@angular/core';
import { Intro } from '../intro';

@Component({
  selector: 'home',
  providers: [],
  directives: [ Intro ],
  pipes: [ ],
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})

export class Home {
  constructor() {}
}
