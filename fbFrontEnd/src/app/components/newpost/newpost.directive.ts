import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[np-host]',
})

export class NPostDirective 
{
  constructor(public viewContainerRef: ViewContainerRef) { }
}