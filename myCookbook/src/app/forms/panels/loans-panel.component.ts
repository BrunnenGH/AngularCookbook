import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ContentChild, forwardRef,
  Input, OnChanges, SimpleChanges, ViewChild
} from '@angular/core';
import { LoansPanelHeaderComponent } from './loans-panel';
import { LoansPanelBodyComponent } from './loans-panel-body.component';

@Component({
  selector: 'cps-loans-panel',
  templateUrl: './loans-panel.component.html',
  styleUrls: ['./loans-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansPanelComponent implements OnChanges, AfterViewInit {
  @Input() header = '';
  @Input() open = true;
  @Input() customClass = '';
  @ViewChild(forwardRef(() => LoansPanelHeaderComponent), { static: false }) headerInstance: LoansPanelHeaderComponent;
  @ContentChild(forwardRef(() => LoansPanelBodyComponent), { static: false }) bodyInstance: LoansPanelBodyComponent;

  ngAfterViewInit(): void {
    if (this.headerInstance) {
      this.headerInstance.opened = this.open;
      this.headerInstance.openChange.subscribe(val => {
        this.onOpenChange(val);
      });
      this.headerInstance.changeDetectorRef.detectChanges();
    }
    if (this.bodyInstance) {
      this.bodyInstance.opened = this.open;
      this.bodyInstance.changeDetectorRef.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.open) {
      this.onOpenChange(this.open);
    }
  }

  onOpenChange(val): void {
    this.open = val;
    if (this.headerInstance) {
      this.headerInstance.opened = this.open;
      this.headerInstance.changeDetectorRef.detectChanges();
    }
    if (this.bodyInstance) {
      this.bodyInstance.opened = this.open;
      this.bodyInstance.changeDetectorRef.detectChanges();
    }
  }
}
