import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssflexComponent } from './cssflex/cssflex.component';
import { FlexComponent } from './flex.component';
import { FxflexComponent } from './fxflex/fxflex.component';

const routes: Routes = [
  { path: '', component: FlexComponent },
  { path: 'cssflex', component: CssflexComponent },
  { path: 'fxflex', component: FxflexComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexRoutingModule { }
