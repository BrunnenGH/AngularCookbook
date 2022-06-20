import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Html5validatorsComponent } from './html5validators/html5validators.component';
import { LoansPanelBodyComponent, LoansPanelComponent, LoansPanelHeaderComponent } from './panels/loans-panel';


@NgModule({
  declarations: [
    Html5validatorsComponent,
    LoansPanelBodyComponent,
    LoansPanelComponent,
    LoansPanelHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
