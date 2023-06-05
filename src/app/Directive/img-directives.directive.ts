import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[imgStyle]'
})
export class ImgDirectivesDirective {
  @Input("imgStyle")
  radus: string = '30px';
    constructor(private element: ElementRef) {
    this.element.nativeElement.style.borderRadius =  `${this.radus}`;
  }

}
