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

export const APP_ROUTES = [    
      {path:'add-course',component:AddCourseComponent, canDeactivate:[PartialFormDeactivateGuardService]},
      {path:'add-author',component:AddAuthorComponent},
      {path:'courses',
          component:CoursesIndexComponent, 
          children:[
            {path:'',component:CourseListComponent},
            {path:':courseId', component:CourseDetailComponent},
            {path:':courseId/enroll', component:EnrollComponent, canActivate:[EnrollActivateGuardService]},
            ]},
      {path:'**',redirectTo:'courses', pathMatch:'full'}
    ]