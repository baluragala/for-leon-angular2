import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnpublishedDirective } from './unpublished.directive';
import { DelayDirective } from './delay.directive';
import { CardComponent } from './card.component';
import { PowerOfPipe } from './power-of.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnpublishedDirective, DelayDirective, CardComponent, PowerOfPipe],
  exports:[UnpublishedDirective, DelayDirective, CardComponent, PowerOfPipe]
})
export class SharedModule { }
