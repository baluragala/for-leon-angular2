import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  template: `
    <p>
      add-course Works!
    </p>
    <input type="text" [(ngModel)]="title">
    <label>{{title}}</label>
  `,
  styles: []
})
export class AddCourseComponent implements OnInit {

  title:string='this is from comp';
  constructor() { }

  ngOnInit() {
  }

}
