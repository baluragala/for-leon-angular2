import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styles: []
})
export class AddAuthorComponent implements OnInit {
  
  author={firstName:'Balakrishna',lastName:'Ragala',address:{street:'132 chruch street',city:'NY',state:'NY'}} ;

  authorForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.authorForm = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      lastName: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
      })
    })
    this.authorForm.patchValue(this.author);
    this.authorForm.valueChanges.subscribe(v=>console.log(v))
  }

  OnSubmit(){
    console.log('')
  }

}
