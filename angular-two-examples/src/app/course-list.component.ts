import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  template: `
    <ng-content></ng-content>
    <p>Enrolled Courses:{{enrolledCourses}}</p>
     <!--
     <app-course-list-item [course]="courses[0]" (courseEnrolledEvent)="OnCourseEnrolled($event)" (courseClicked)="courseClikedListener($event)">THIS IS SOME THING</app-course-list-item>
     <app-course-list-item [course]="courses[1]" (courseEnrolledEvent)="OnCourseEnrolled($event)" (courseClicked)="courseClikedListener($event)">THIS IS SOME THING</app-course-list-item>
     <app-add-course></app-add-course>
     -->
     <app-course-list-item *ngFor="let course of courses" [course]="course"
     (courseEnrolledEvent)="OnCourseEnrolled($event)">
     </app-course-list-item>

  `,
  styles: []
})
export class CourseListComponent implements OnInit {

  @Input() header:string;

  courses:[{title:string,author:string, isPublished:boolean, rating:number, price:number}];
  enrolledCourses:string='No courses enrolled';
  constructor() { }

  ngOnInit() {
    this.courses = [
      {title:'Learning Angular2',author:'baluragala', isPublished:true,rating:3,price:500},
      {title:'Learning React',author:'zeo', isPublished:true,rating:2, price:300},
       {title:'Learning Vue.js',author:'zeo', isPublished:false,rating:0, price:600},
        {title:'Learning Elm',author:'zeo', isPublished:true,rating:1,price:200},
         {title:'Learning ML',author:'zeo', isPublished:false,rating:0, price:400}
    ]
  }

  OnCourseEnrolled(enrolledCourse){
    console.log(enrolledCourse)
    this.enrolledCourses=enrolledCourse.title;
  }
  courseClikedListener(m){
      console.log(m);
  }

}
