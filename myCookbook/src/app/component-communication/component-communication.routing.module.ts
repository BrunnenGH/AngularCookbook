import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide/guide.component';
import { ViewChildrenComponent } from './view-children/view-children.component';

const routes: Routes = [
  {
    path: '',
    component: GuideComponent,
    children: [
      {
        path: 'view-children',
        component: ViewChildrenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentCommunicationRoutingModule { }
