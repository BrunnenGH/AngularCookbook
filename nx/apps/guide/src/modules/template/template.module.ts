import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template.component';
import { RorwformComponent } from './rorwform/rorwform.component';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    TemplateComponent,
    RorwformComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    AccordionModule
  ]
})
export class TemplateModule { }
