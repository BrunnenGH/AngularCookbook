import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../shared/logger.service';

let nextId = 1;

// Spy on any element to which it is applied.
// Usage: <div appSpy>...</div>
@Directive({selector: '[appSpy]'})
export class SpyDirective implements OnInit, OnDestroy {
  private id = nextId++;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log(`Spy #${this.id} OnInit`);
  }

  ngOnDestroy() {
    this.logger.log(`Spy #${this.id} OnDestroy`);
  }
}
