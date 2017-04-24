import { Component, OnInit,Input, SimpleChanges, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  template: `
    <div class="course-item" (click)="OnCourseClicked()">
      <p class="title">Course Title:{{course.title | uppercase }} <span>({{course.price | currency:'USD':true:'3.4' }})</span></p>
      <p class="title">Course Author:{{course.author}}</p>
      <button *ngIf="course.isPublished===true" (click)="OnCourseEnrolled(course)">Enroll</button>
      <label *ngIf="course.isPublished===false" [ngStyle]="{'backgroundColor':'orange'}"> Coming Soon</label>
      <label *ngIf="course.isPublished===false" [ngClass]="'title unpublished'"> Coming Soon</label>
      <label *ngIf="course.isPublished===false" [ngClass]="['title','unpublished']"> Coming Soon</label>
      <label *ngIf="course.isPublished===false" [ngClass]="{'title':course.isPublished,'unpublished':!course.isPublished}"> Coming Soon</label>
      <div [ngSwitch]="course.rating">
         <p *ngSwitchCase="1">Good</p>
         <p *ngSwitchCase="2">Better</p>
         <p *ngSwitchCase="3">Best</p>
         <p *ngSwitchDefault>Rating unavailable</p>
      </div>
      <label appUnpublished *ngIf="course.isPublished===false">unpublished</label>
    </div>
  `,
  styles: [`.course-item{
    border: 1px solid green
  }
  `, `.title{ font-weight:bold; text-decoration:underline}`,`.coming-soon { color:orange}`,`.unpublished{color:red}`]
})
export class CourseListItemComponent implements OnInit {

  @Input() course:{title:string,author:string,isPublished:boolean};
  @Input() title:string;
  @Output() courseEnrolledEvent:EventEmitter<any>=new EventEmitter();
  @Output() courseClicked:EventEmitter<any>=new EventEmitter();

  unPublishedClasses:string='coming-soon title';

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
        this.unPublishedClasses='unpublished';
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
