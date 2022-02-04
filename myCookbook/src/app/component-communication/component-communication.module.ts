import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateDirective } from './validate.directive';
import { ViewChildrenComponent } from './view-children/view-children.component';

@NgModule({
  declarations: [
    ValidateDirective,
    ViewChildrenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentCommunicationModule { }
