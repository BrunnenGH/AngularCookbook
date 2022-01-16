import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { LifecycleComponent } from './lifecycle.component';
import { SequenceComponent } from './sequence/sequence.component';
import { ChildComponent } from './child/child.component';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [
    LifecycleComponent,
    SequenceComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    LifecycleRoutingModule,
    AccordionModule
  ]
})
export class LifecycleModule { }
