import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor() { }
  
  getCourses(){
    return [
    {title:'t1',author:'a1'},
    {title:'t1',author:'a1'}
  ];
  }
}
