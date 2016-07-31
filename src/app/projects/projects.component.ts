import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'projects`',
  styleUrls: [ './projects.style.css' ],
  templateUrl: './projects.template.html'
})

export class Projects {
  constructor(public route: ActivatedRoute) {

  }

}
