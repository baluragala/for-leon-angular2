import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-synatx',
  templateUrl: './template-synatx.component.html',
  styleUrls: ['./template-synatx.component.css']
})
export class TemplateSynatxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sayHello(){
    return "Hello!!"
  }
  
  message:string="Templating is great feature."
  
  course:Object = {title:'Angular',author:'balu'}

  imageWidth=100;

  imageUrl="https://angular.io/resources/images/logos/angular/angular_solidBlack.svg"

}
