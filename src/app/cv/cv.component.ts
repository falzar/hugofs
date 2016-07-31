import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cv',
  styleUrls: [ './cv.style.css' ],
  templateUrl: './cv.template.html'
})

export class CV {
  constructor(public route: ActivatedRoute) {

  }

}
