import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { AddCourseComponent } from './add-course.component'

@Injectable()
export class PartialFormDeactivateGuardService implements CanDeactivate<AddCourseComponent> {
    
    canDeactivate(component: AddCourseComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     alert('Deactivation disbled');
     return true;
    }


  constructor() { }


}
