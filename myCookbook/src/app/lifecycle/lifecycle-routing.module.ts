import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle.component';
import { SequenceComponent } from './sequence/sequence.component';

const routes: Routes = [
  { path: '', component: LifecycleComponent },
  { path: 'sequence', component: SequenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecycleRoutingModule { }
