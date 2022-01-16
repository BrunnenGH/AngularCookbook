import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexRoutingModule } from './flex-routing.module';
import { FlexComponent } from './flex.component';


@NgModule({
  declarations: [
    FlexComponent
  ],
  imports: [
    CommonModule,
    FlexRoutingModule
  ]
})
export class FlexModule { }
