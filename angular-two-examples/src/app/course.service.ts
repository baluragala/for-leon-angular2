import { Injectable } from '@angular/core';
import { ICourse } from './ICourse';
import {ICourseService} from './ICourseService'

@Injectable()
export class CourseService {

  constructor() { }

  getCourses():Array<ICourse>{
    let courses = [
      {title:'Learning Angular2',author:'baluragala', isPublished:true,rating:3,price:500},
      {title:'Learning React',author:'zeo', isPublished:true,rating:2, price:300},
      {title:'Learning Vue.js',author:'zeo', isPublished:false,rating:0, price:600},
      {title:'Learning Elm',author:'zeo', isPublished:true,rating:1,price:200},
      {title:'Learning ML',author:'zeo', isPublished:false,rating:0, price:400}
    ]

    return courses;
  }

}
