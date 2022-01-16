import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, DoCheck, Input,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component({
  selector: 'nx-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.scss']
})
export class SequenceComponent implements OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy  {

  @Input() name = 'Filip';

  hookLog: string[] = [];

  constructor(private readonly logger: LoggerService) {
    this.hookLog = this.logger.logs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log(`OnChanges`);
  }

  ngOnInit(): void {
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logger.log(`DoCheck`); }

  ngAfterContentInit() { this.logger.log(`AfterContentInit`);  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logger.log(`AfterContentChecked`); }

  ngAfterViewInit() { this.logger.log(`AfterViewInit`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logger.log(`AfterViewChecked`); }

  ngOnDestroy() { this.logger.log(`OnDestroy`); }

}
