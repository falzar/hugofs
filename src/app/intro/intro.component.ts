import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'intro',
  styleUrls: [ './intro.style.css' ],
  templateUrl: './intro.template.html'
})

export class Intro {
  constructor(public route: ActivatedRoute) {

  }

}
