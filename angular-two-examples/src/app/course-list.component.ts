import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  template: `
    <h4>
      List Of Courses
    </h4>
    <p>Enrolled Courses:{{enrolledCourses}}</p>
     <!--
     <app-course-list-item [course]="courses[0]" (courseEnrolledEvent)="OnCourseEnrolled($event)" (courseClicked)="courseClikedListener($event)"></app-course-list-item>
     <app-course-list-item [course]="courses[1]" (courseEnrolledEvent)="OnCourseEnrolled($event)" (courseClicked)="courseClikedListener($event)"></app-course-list-item>
     <app-add-course></app-add-course>
     -->
     <app-course-list-item *ngFor="let course of courses" [course]="course"
     (courseEnrolledEvent)="OnCourseEnrolled($event)">
     </app-course-list-item>

  `,
  styles: []
})
export class CourseListComponent implements OnInit {
  courses:[{title:string,author:string, isPublished:boolean}];
  enrolledCourses:string='No courses enrolled';
  constructor() { }

  ngOnInit() {
    this.courses = [
      {title:'Learning Angular2',author:'baluragala', isPublished:true},
      {title:'Learning React',author:'zeo', isPublished:true},
       {title:'Learning Vue.js',author:'zeo', isPublished:false},
        {title:'Learning Elm',author:'zeo', isPublished:true},
         {title:'Learning ML',author:'zeo', isPublished:false}
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
