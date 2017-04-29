import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title = 'Hurry, my app works!!!';

  messages: any[] = ['Message 1','ddd','ddd'];
  messageMapping: {[k: string]: string} = 
  {'=0': 'No messages.', '=1': 'One message.', '=2':'Two messages', 'other': '# messages.'};


  gender: string = 'guys';
  inviteMap: any = {'male': 'Invite him.', 'female': 'Invite her.', 'other': 'Invite them.'};


}
