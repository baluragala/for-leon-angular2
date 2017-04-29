import {Component} from "@angular/core";

@Component({
  selector: 'app-async-promise-pipe',
  template: `
  <div>
    <fieldset>
      <legend>Async Promise :</legend>
      <code>promise or observable expression | async</code>
      <br/><br/>
      <button (click)="clicked()" class="btn btn-success">Click here to Resolve Promise</button>
      <p>Result: {{statusMessage}}</p>
      <pre>{{ promise | async }}</pre>
    </fieldset>
  </div>`
})
export class AsyncPromisePipeComponent {

  promise: Promise<string>;
  statusMessage: string;
  intervalId: any;
  seconds: number = 5;

  constructor() {

  }

  clicked() {
    this.statusMessage = `Promise will be resolved in ${this.seconds}`;
    this.intervalId = setInterval(() => {
      this.seconds--;
      this.statusMessage = `Promise will be resolved in ${this.seconds}`;
      if (this.seconds === 0) {
        clearInterval(this.intervalId);
        this.statusMessage = '';
      }

    }, 1000);
    this.promise = new Promise((resolve, reject) => {
      let apiResult = {
        username: 'baluragala',
        courses: ['NodeJS', 'Angular', 'React']
      };

      setTimeout(() => resolve(JSON.stringify(apiResult)), this.seconds * 1000);
    })
  }
}
