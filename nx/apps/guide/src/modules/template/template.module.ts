import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { RorwformComponent } from './rorwform/rorwform.component';
import {AccordionModule} from 'primeng/accordion';
import { RoComponent } from './ro/ro.component';

@NgModule({
  declarations: [
    TemplateComponent,
    RorwformComponent,
    RoComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    AccordionModule
  ]
})
export class TemplateModule { }
