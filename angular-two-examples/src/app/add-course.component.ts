import { Component, OnInit, ViewChild } from '@angular/core';
import { ICourse } from './ICourse'
import { CourseService} from './course.service';
import {NgForm, FormControl} from '@angular/forms'

@Component({
  selector: 'app-add-course',
  templateUrl:'./add-course.component.html',
  styles: [`.ng-valid[required], .ng-valid.required {
  border-left: 5px solid #42A948; /* green */
}`,

`.ng-invalid:not(form) {
  border-left: 5px solid #a94442; /* red */
}`
]
})
export class AddCourseComponent implements OnInit {


  // form model -> business model
  model:ICourse;
  title:string='this is from comp';
  categories:Array<string>;
  @ViewChild('title') titleControl:FormControl;
  constructor(private courseService:CourseService) { }

  @ViewChild('courseForm',FormControl) courseForm:NgForm;

  ngOnInit() {
    this.categories = this.courseService.getCategories();
    this.model = {title:'',author:'',description:'', price:0, category:'', isPublished:false};
  }

  ngDoCheck(){
    console.log(this.courseForm.form.controls);
  }

  OnSubmit(){
    console.log(this.model);
    //console.log(this.courseForm.form.value);
  }

}
