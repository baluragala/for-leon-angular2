import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service'
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-course-detail',
  template: `
    <p>
      course-detail Works!
    </p>
    {{ course | json }}
  `,
  styles: []
})
export class CourseDetailComponent implements OnInit {

  course;
  constructor(private courseService:CourseService, private router:Router, private activeRoute:ActivatedRoute ) { 
      this.activeRoute.queryParams.subscribe( q => console.log(q));
      this.activeRoute.params.subscribe(
            p => this.course = this.courseService.getCourseById(p["courseId"]));
  }

  ngOnInit() {
    
  }

}
