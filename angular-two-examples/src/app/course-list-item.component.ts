import { Component, OnInit,Input, SimpleChanges, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  template: `
    <div class="course-item" (click)="OnCourseClicked()">
      <p class="title">Course Title:{{course.title}}</p>
      <p class="title">Course Author:{{course.author}}</p>
      <button *ngIf="course.isPublished===true" (click)="OnCourseEnrolled(course)">Enroll</button>
      <label *ngIf="course.isPublished===false" [ngClass]="'coming-soon'"> Coming Soon</label>
    </div>
  `,
  styles: [`.course-item{
    border: 1px solid green
  }
  `, `.title{ font-weight:bold}`,`.coming-soon { color:orange}`]
})
export class CourseListItemComponent implements OnInit {

  @Input() course:{title:string,author:string,isPublished:boolean};
  @Input() title:string;
  @Output() courseEnrolledEvent:EventEmitter<any>=new EventEmitter();
  @Output() courseClicked:EventEmitter<any>=new EventEmitter();

  comingSoonColor:any={
    color:'red'
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }

  constructor() { }

  ngOnInit() {
    if(this.course.isPublished === false){
        this.comingSoonColor={
            color:'red',
            backgroundColor:'yellow'
        }
    }
  }

 OnCourseEnrolled(selectedCourse){
  console.log(selectedCourse);
  this.courseEnrolledEvent.emit(selectedCourse);
 }

 OnCourseClicked(){
  this.courseClicked.emit('Course Clicked From Child')
 }

}
