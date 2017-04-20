import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSynatxComponent } from './template-synatx/template-synatx.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TemplateSynatxComponent],
  exports:[TemplateSynatxComponent]
})
export class TemplateModule { }
