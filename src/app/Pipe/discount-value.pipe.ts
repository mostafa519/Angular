import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDiscount'
})
export class DiscountValuePipe implements PipeTransform {

  transform(value: number,discountNum:number=20 ): number {
    let disNum=discountNum/100;
    let mulOriginalPriceByDisRes=value*disNum;
    let sub=value-mulOriginalPriceByDisRes;
    return sub;
  }

}
