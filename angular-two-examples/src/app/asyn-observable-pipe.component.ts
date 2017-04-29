import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx"

@Component({
  selector: 'app-async-observable-pipe',
  template: `
  <fieldset>
    <legend>Async Observable :</legend>
    <code>promise or observable expression | async </code>
    <br/><br/>
    <h5>
      Count: {{counter$ | async}}
    </h5>
  </fieldset>
  `,
  styles: []
})
export class AsynObservablePipeComponent {

  counter$: Observable<any>;

  constructor() {
    //this.counter$ = Observable.of('12','bala');
    this.counter$ = Observable.interval(1000);
    console.log(this.counter$);
    let t = this.counter$.map( e => e * 10 );
    console.log(t);
    t.subscribe((n)=> console.log(n))
  }

 

}
