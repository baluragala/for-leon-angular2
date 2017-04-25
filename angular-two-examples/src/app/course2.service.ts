import { Injectable } from '@angular/core';
import { ICourse } from './ICourse';
import {ICourseService} from './ICourseService'

@Injectable()
export class Course2Service implements ICourseService{

  constructor() { }

  getCourses():Array<ICourse>{
    let courses = [
      {title:'2Learning Angular2',author:'baluragala', isPublished:true,rating:3,price:500},
      {title:'2Learning React',author:'zeo', isPublished:true,rating:2, price:300},
      {title:'2Learning Vue.js',author:'zeo', isPublished:false,rating:0, price:600},
      {title:'2Learning Elm',author:'zeo', isPublished:true,rating:1,price:200},
      {title:'2Learning ML',author:'zeo', isPublished:false,rating:0, price:400}
    ]

    return courses;
  }

}
