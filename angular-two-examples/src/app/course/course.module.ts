import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  declarations: [CourseComponent, CourseDetailComponent],
  bootstrap:[CourseDetailComponent]
})
export class CourseModule { }
