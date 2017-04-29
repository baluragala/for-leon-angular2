import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'

@Component({
  selector: 'app-add-post',
  template: `
    <p>
      add-post Works!
    </p>
    <form
  `,
  styles: []
})
export class AddPostComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

}
