import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleRoutingModule } from './lifecycle-routing.module';
import { LifecycleComponent } from './lifecycle.component';
import { SequenceComponent } from './sequence/sequence.component';
import { ChildComponent } from './child/child.component';
import {AccordionModule} from 'primeng/accordion';
import { SpyDirective } from './spy.directive';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    LifecycleComponent,
    SequenceComponent,
    ChildComponent,
    SpyDirective
  ],
  imports: [
    CommonModule,
    LifecycleRoutingModule,
    AccordionModule,
    ButtonModule
  ]
})
export class LifecycleModule { }
