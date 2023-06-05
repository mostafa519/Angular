import { Component } from '@angular/core';
import { WomanDressService } from 'src/app/Service/woman-dress.service';
import { Iproduct } from 'src/app/modulees/iproduct';

@Component({
  selector: 'app-dresses',
  templateUrl: './dresses.component.html',
  styleUrls: ['./dresses.component.scss']
})
export class DressesComponent {
  constructor(public serivceList: WomanDressService){

  }
  ProductWomanDress:Iproduct[]=this.serivceList.productWoman;
}
