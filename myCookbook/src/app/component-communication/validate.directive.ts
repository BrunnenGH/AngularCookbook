import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {
  @Input() appValidate = false;

  constructor() { }

}
