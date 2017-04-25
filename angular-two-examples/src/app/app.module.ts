import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from './course-list-item.component';
import { AddCourseComponent } from './add-course.component'
import { SharedModule } from './shared/shared.module'
import { CourseService } from './course.service'
import { Course2Service } from './course2.service'
import {ICourseService} from './ICourseService'
import {AUTH_KEY} from './tokens'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseListItemComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TemplateModule,
    SharedModule
  ],
  providers: [
    // //{provide:CourseService, useClass:Course2Service},
    // {provide:'ENV',useValue:'PROD'},
    // {provide:CourseService, 
    //   useFactory:courseServiceFactory, 
    //   deps:['ENV']}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function courseServiceFactory(targetedEnv:string){
  if(targetedEnv=='DEV')
    return new CourseService()
  else
    return new Course2Service()
}
