import { Component, Input, ViewChild } from '@angular/core';
import { Iproduct } from 'src/app/modulees/iproduct';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-parent-iproduct',
  templateUrl: './parent-iproduct.component.html',
  styleUrls: ['./parent-iproduct.component.scss']
})
export class ParentIproductComponent {

  constructor(public productPrtList: ProductServiceService){}
  _filter_List: string = "";
   _NumX:number=0;
  // _find_List:any;
  productsParent: Iproduct[] = [];
  productsCards: Iproduct[] = [];
  prCard: Iproduct|undefined;


  sortedItems(arrAfterSort: any): void {

    this.productsParent.push(arrAfterSort);
    console.log(this.productsParent);

  }
  num:number=0;
  addCardInTableEvent2(cardItem :any):void{


for (const iterator of cardItem) {
  this.num=iterator["Price"];
}
        this.productsCards.push(...cardItem);
      }
  delCardInTables(index: Iproduct) {

      index.Quantity+=1;
      index.id-=1;
       index.Price-=this.num;
      console.log(index.Price);
  }
  onSelectedPrice(value: string): void {
    this._NumX = parseInt(value);
    console.log(this._NumX);
      this.productPrtList.productList = this.productPrtList.performFind(this._NumX);
      console.log(this.productPrtList.productList );

  }
}
