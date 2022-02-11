import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RorwformComponent } from './rorwform/rorwform.component';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent },
  { path: 'rorwform', component: RorwformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
