import { Injectable } from '@angular/core';
import { AuthService } from './auth.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class EnrollActivateGuardService implements CanActivate {
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     if(this.authService.isLogged === true) {
       return true;
     }
    else {
      alert('You must be logged in to enroll for this course');
      return false
     }
     
    }


  constructor(private authService: AuthService) { }

}
