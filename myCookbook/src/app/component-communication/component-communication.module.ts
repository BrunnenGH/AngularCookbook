import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCommunicationRoutingModule } from './component-communication.routing.module';
import { GuideComponent } from './guide/guide.component';
import { ValidateDirective } from './validate.directive';
import { ViewChildrenComponent } from './view-children/view-children.component';

@NgModule({
  declarations: [
    GuideComponent,
    ValidateDirective,
    ViewChildrenComponent
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRoutingModule
  ]
})
export class ComponentCommunicationModule { }
