import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cps-loans-panel-header',
  templateUrl: './loans-panel-header.component.html',
  styleUrls: ['./loans-panel-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansPanelHeaderComponent {
  @Input() label = '';
  @Input() customClass = '';
  @Output() openChange = new EventEmitter();

  opened = true;

  constructor(readonly changeDetectorRef: ChangeDetectorRef) {
  }

  toggleOpen(): void {
    this.opened = !this.opened;
    this.openChange.emit(this.opened);
  }
}
