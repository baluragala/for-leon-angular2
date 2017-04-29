import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  courses:[any]=[
    {title:'t1',author:'a1'},
    {title:'t1',author:'a1'}
  ];
}
