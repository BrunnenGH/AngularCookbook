import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexRoutingModule } from './flex-routing.module';
import { FlexComponent } from './flex.component';
import { FxflexComponent } from './fxflex/fxflex.component';
import { CssflexComponent } from './cssflex/cssflex.component';


@NgModule({
  declarations: [
    FlexComponent,
    FxflexComponent,
    CssflexComponent
  ],
  imports: [
    CommonModule,
    FlexRoutingModule
  ]
})
export class FlexModule { }
