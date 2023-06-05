import { TestBed } from '@angular/core/testing';
import { EventEmitter, Injectable, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../modulees/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements OnChanges {
  productList: Iproduct[];
  constructor( ) {
    this.productList = [{
      id: 1,
      Name: "Chair",
      Price: 1400,
      Quantity: 100,
      CateoggryID: 1,
      Img: "assets/imgs/chair.jpg"
    },
    {
      id: 2,
      Name: "Chair",
      Price: 1500,
      Quantity: 20,
      CateoggryID: 1,
      Img: "assets/imgs/download (2).jpg"
    }, {
      id: 3,
      Name: "Chair",
      Price: 1500,
      Quantity: 10,
      CateoggryID: 1,
      Img: "assets/imgs/download.jpg"
    }, {
      id: 4,
      Name: "Table",
      Price: 2100,
      Quantity: 25,
      CateoggryID: 2,
      Img: "assets/imgs/images (1).jpg"
    }, {
      id: 5,
      Name: "Table",
      Price: 1500,
      Quantity: 20,
      CateoggryID: 2,
      Img: "assets/imgs/images (3).jpg"
    },
    {
      id: 6,
      Name: "Table",
      Price: 7000,
      Quantity: 15,
      CateoggryID: 2,
      Img: "assets/imgs/images (4).jpg"
    },
    {
      id: 7,
      Name: "Table",
      Price: 80000,
      Quantity: 3,
      CateoggryID: 2,
      Img: "assets/imgs/images (5).jpg"
    },
    {
      id: 8,
      Name: "Bed",
      Price: 20000,
      Quantity: 15,
      CateoggryID: 3,
      Img: "assets/imgs/images (6).jpg"
    }, {
      id: 9,
      Name: "Table",
      Price: 25000,
      Quantity: 20,
      CateoggryID: 2,
      Img: "assets/imgs/images.jpg"
    },
    {
      id: 10,
      Name: "Table",
      Price: 1500,
      Quantity: 20,
      CateoggryID: 2,
      Img: "assets/imgs/table.jpg"
    },
    ];
  }
  ngOnChanges(): void {
    // this.tableList2=this.tableList2;
    this.productList=this.productList;
  }
  performFind(Fby: number) :Iproduct[] {
    return this.productList.filter((product: Iproduct) =>
      product.Price <= Fby
    );
  }
  performFilter(Fby: string): Iproduct[] {
    Fby = Fby.toLocaleLowerCase();
    return this.productList.filter((product: Iproduct) =>
      product.Name.toLocaleLowerCase().includes(Fby)
    );
  }

  //sort
  @Output() eventSort: EventEmitter<Iproduct[]> = new EventEmitter<Iproduct[]>();

  Sorted() {
    var sortedItems = this.productList.sort((a, b) => {
      if (a.Name < b.Name) {
        return 1;
      }
      if (a.Name > b.Name) {
        return -1;
      }
      return 0;
    });

    // fire event
    this.eventSort.emit(sortedItems);
  }

  getAllProds():Iproduct[]{

    return this.productList;

  }
  getProductByID(prodId:number):Iproduct|undefined {
    return this.productList.find(prd=>prd.id==prodId);
  }
}
  // //Add Card
  // tableList: Iproduct[] = [];

  // addCardInTables(index: number) {
  //   if (!this.tableList.includes(this.productList[index - 1])) {
  //     var pushedCard = this.tableList.push(this.productList[index - 1]);
  //   //  console.log(pushedCard);
  //   }

  // }



  // x: number = 0;
  // delCardInTables(index: Iproduct) {

  //   this.x = index.ID;
  //   //  this.tableList2.pop();

  //   if (this.tableList2.includes(index)) {

  //     index.ID = 0;

  //   }
  //   else {

  //     index.ID = this.x;
  //   }
    // this.tableList2.push(this.tableList2[x]);

 //tableList2: Iproduct[] = [];
  // @Output() addCardInTableEvent: EventEmitter<Iproduct[]> = new EventEmitter<Iproduct[]>();

  // addCardInTables2(index: Iproduct) {
  //   // var y = index.ID;
  //   if (!this.tableList2.includes(index)) {
  //     this.tableList2.push(index);
  //     console.log(this.tableList2);
  //     this.addCardInTableEvent.emit(this.tableList2);
  //   }
  //   if (index.ID == 0) {
  //     index.ID = this.x;
  //     if (!this.tableList2.includes(index)) {
  //       this.tableList2.push(index);
  //       console.log(this.tableList2);
  //       this.addCardInTableEvent.emit(this.tableList2);
  //     }



  //   }
    // else if (this.tableList2.includes(index)) {
    //   if (index.ID==0)
    //  { index.ID=y;
    //   this.tableList2.push(index);}
    // }
    // console.log(index);

  //Day 4 Routting

