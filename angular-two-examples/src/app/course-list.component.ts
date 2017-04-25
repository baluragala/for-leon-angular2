import { Component, OnInit, Input,Inject } from '@angular/core';
import {CourseService} from './course.service';
import {Course2Service} from './course2.service';
import {ICourse} from './ICourse';
import { AUTH_KEY } from './tokens';

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
  styles: [],
  viewProviders:[CourseService]
})
export class CourseListComponent implements OnInit {

  @Input() header:string;

  courses:Array<ICourse>;
  enrolledCourses:string='No courses enrolled';
  

  constructor(private courseService:CourseService, @Inject('AUTH_KEY') private authKey) { 
    console.log(courseService,authKey);
  }

  ngOnInit() {
    //this.courseService = new Course2Service();
    this.courses = this.courseService.getCourses();
  }

  OnCourseEnrolled(enrolledCourse){
    console.log(enrolledCourse)
    this.enrolledCourses=enrolledCourse.title;
  }
  courseClikedListener(m){
      console.log(m);
  }

}
