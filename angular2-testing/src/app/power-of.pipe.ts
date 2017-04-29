import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerOf'
})
export class PowerOfPipe implements PipeTransform {

  transform(value: any, toPower:number): number {
    return Math.pow(value,toPower)
  }

}
