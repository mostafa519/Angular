import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardCustom'
})
export class CardCustomPipe implements PipeTransform {

  transform(value: string): string {
    var credit = value.trim().split(/(\d{4})/);
    var card = credit.join("-").replaceAll("--", "-");
    var card2 = card.replace('-',"");
    var card3 = card2.substring(0,card2.length-1);
        return card3;

  }
}
