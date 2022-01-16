import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'controls', loadChildren: () => import('../modules/controls/controls.module').then(m => m.ControlsModule) },
  { path: 'template', loadChildren: () => import('../modules/template/template.module').then(m => m.TemplateModule) },
  { path: 'observables', loadChildren: () => import('../modules/observables/observables.module').then(m => m.ObservablesModule) },
  { path: 'async', loadChildren: () => import('../modules/async/async.module').then(m => m.AsyncModule) },
  { path: 'lifecycle', loadChildren: () => import('../modules/lifecycle/lifecycle.module').then(m => m.LifecycleModule) },
  { path: 'flex', loadChildren: () => import('../modules/flex/flex.module').then(m => m.FlexModule) },
  { path: 'ngxs', loadChildren: () => import('../modules/ngxs/ngxs.module').then(m => m.NgxsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
