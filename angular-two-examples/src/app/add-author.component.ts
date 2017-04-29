import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Http,Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styles: []
})
export class AddAuthorComponent implements OnInit {
  
  author={firstName:'Balakrishna',lastName:'Ragala',address:{street:'132 chruch street',city:'NY',state:'NY'}} ;

  authorForm:FormGroup;
  constructor(private http:Http) { }

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
    console.log(this.authorForm.value);

    let headers = new Headers({'Content-Type':'application/json','X-App-Id':'1002'})
    let options = new RequestOptions({headers:headers});
    this.http.post('http://localhost:3000/authors',this.authorForm.value,options)
    .subscribe(r=>console.log(r.json()))
  }

}
