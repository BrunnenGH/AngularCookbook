import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'cps-loans-panel-body',
  templateUrl: './loans-panel-body.component.html',
  styleUrls: ['./loans-panel-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansPanelBodyComponent {
  @Input() customClass = '';
  opened = true;

  @Input()
  readOnly = false;

  constructor(readonly changeDetectorRef: ChangeDetectorRef) {
  }
}
