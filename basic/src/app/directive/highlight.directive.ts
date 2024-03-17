import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
 el:ElementRef //dependency Injection
  constructor(el:ElementRef) { 
    this.el = el;
  }
  @HostBinding('style.backgroundColor')
  red='red';

  @HostListener('mouseenter')
  changeFont(){
    this.el.nativeElement.style.fontSize ='20px'
  }
  @HostListener('mouseleave')
 resetFont(){
  this.el.nativeElement.style.fontSize ='15px'
 }
}
