import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  imports: [
    PanelMenuModule
  ],
  exports: [
    PanelMenuModule
  ]
})
export class SharedModule {

}
