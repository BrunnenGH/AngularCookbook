import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsyncRoutingModule } from './async-routing.module';
import { AsyncComponent } from './async.component';


@NgModule({
  declarations: [
    AsyncComponent
  ],
  imports: [
    CommonModule,
    AsyncRoutingModule
  ]
})
export class AsyncModule { }
