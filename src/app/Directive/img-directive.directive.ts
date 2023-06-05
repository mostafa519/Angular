import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[Styles]'
})
export class ImgDirectiveDirective implements OnChanges {
  constructor(private element: ElementRef) {

    //take the value
    this.element.nativeElement.style.borderRadius = '30px';
  }
  ngOnChanges(): void {
    //Not Take the Value
    // this.element.nativeElement.style.borderRadius = '30px';
  }
  @HostListener('mouseover') func1() {
    this.element.nativeElement.style.opacity = '.8';
    this.element.nativeElement.style.boxShadow="10px 20px 30px inset";
    this.element.nativeElement.style.borderRadius = '30px';

  }
  @HostListener('mouseout') func2() {
    this.element.nativeElement.style.opacity = '1';
    this.element.nativeElement.style.boxShadow=""
    this.element.nativeElement.style.borderRadius = '10px';

  }

}
