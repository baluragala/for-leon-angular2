import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from './course-list-item.component';
import { AddCourseComponent } from './add-course.component'
import { SharedModule } from './shared/shared.module'
import { CourseService } from './course.service'
import { Course2Service } from './course2.service'
import {ICourseService} from './ICourseService'
import {AUTH_KEY} from './tokens';
import { AddAuthorComponent } from './add-author.component';
import { CourseDetailComponent } from './course-detail.component';
import { EnrollComponent } from './enroll.component'
import { AuthService } from './auth.service'
import {EnrollActivateGuardService} from './enroll-activate-guard.service'
import { PartialFormDeactivateGuardService} from './partial-form-deactivate-guard.service';
import { CoursesIndexComponent } from './courses-index.component'
import { OffersModule} from './offers/offers.module'
import {APP_ROUTES} from './app.routes';
import { AsynObservablePipeComponent } from './asyn-observable-pipe.component';
import { AsyncPromisePipeComponent } from './async-promise-pipe.component';
import { GithubUsersComponent } from './github-users.component';
import { GithubService } from './github.service'

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseListItemComponent,
    AddCourseComponent,
    AddAuthorComponent,
    CourseDetailComponent,
    EnrollComponent,
    CoursesIndexComponent,
    AsynObservablePipeComponent,
    AsyncPromisePipeComponent,
    GithubUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TemplateModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    OffersModule
  ],
  providers: [AuthService,EnrollActivateGuardService,PartialFormDeactivateGuardService,
  GithubService,
    //{provide:CourseService, useClass:Course2Service},
    {provide:'AUTH_KEY',useValue:'E4qerfwe7^sdf%$wssws11'},
    {provide:'ENV',useValue:'DEV'},
    {provide:CourseService, 
      useFactory:courseServiceFactory, 
      deps:['ENV']}
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
