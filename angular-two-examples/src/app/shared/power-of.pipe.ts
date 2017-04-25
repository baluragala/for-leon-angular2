import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerof'
})
export class PowerOfPipe implements PipeTransform {
// {{ 2 | powerof:4}}
// Math.pow(2,4)
  transform(value: any, toPower:number=1): any {
    return Math.pow(value,toPower)
  }

}
