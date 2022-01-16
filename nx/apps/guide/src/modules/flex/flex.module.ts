import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanelMenuModule} from 'primeng/panelmenu';

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
    FlexRoutingModule,
    PanelMenuModule
  ]
})
export class FlexModule { }
