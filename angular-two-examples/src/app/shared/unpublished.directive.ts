import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnpublished]'
})
export class UnpublishedDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor='green'
 }

  @HostListener('mouseleave') onMouseLeave() {
      this.el.nativeElement.style.backgroundColor='brown'
  }

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor='brown'
    el.nativeElement.style.color='white'
  }

}
