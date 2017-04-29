import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-index',
  template: `
    <p>
      courses-index Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CoursesIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
