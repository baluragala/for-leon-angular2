import { Injectable } from '@angular/core';
import { ICourse } from './ICourse';
import {ICourseService} from './ICourseService'

@Injectable()
export class CourseService {

  courses = [
      {id:1,title:'Learning Angular2',author:'baluragala', isPublished:true,rating:3,price:500},
      {id:2,title:'Learning React',author:'zeo', isPublished:true,rating:2, price:300},
      {id:3,title:'Learning Vue.js',author:'zeo', isPublished:false,rating:0, price:600},
      {id:4,title:'Learning Elm',author:'zeo', isPublished:true,rating:1,price:200},
      {id:5,title:'Learning ML',author:'zeo', isPublished:false,rating:0, price:400}
    ]

  constructor() { }

  getCourses():Array<ICourse>{
    return this.courses;
  }

  getCategories(){
    return [
      'Web', 'Mobile', 'Bigdata'
    ]
  }

  getCourseById(id:number){
    return this.courses.find(course => course.id==id)
  }

}
