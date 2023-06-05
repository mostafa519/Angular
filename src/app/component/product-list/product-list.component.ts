import { DiscountOffers } from 'src/app/modulees/discount-offers';
import { Iproduct } from './../../modulees/iproduct';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { Router } from '@angular/router';
import { ParentIproductComponent } from '../parent-iproduct/parent-iproduct.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  template: '<p>child</p>'
})
export class ProductListComponent implements OnInit, OnChanges {

  //Enum values
  discound: DiscountOffers = DiscountOffers["b"];
  discound2: DiscountOffers = DiscountOffers["a"];
  discound3: DiscountOffers = DiscountOffers["c"];


  // implementation of Class Iproduct
  // productList: Iproduct[];

  // day 4 router
  constructor(public serivceList: ProductServiceService, public PrtproductPrtList1: ParentIproductComponent, public router: Router) {
    // this.productList = [{
    //   ID: 1,
    //   Name: "Chair",
    //   Price: 1400,
    //   Quantity: 100,
    //   CateoggryID: 1,
    //   Img: "assets/imgs/chair.jpg"
    // },
    // {
    //   ID: 2,
    //   Name: "Chair",
    //   Price: 1500,
    //   Quantity: 20,
    //   CateoggryID: 1,
    //   Img: "assets/imgs/download (2).jpg"
    // }, {
    //   ID: 3,
    //   Name: "Chair",
    //   Price: 1500,
    //   Quantity: 10,
    //   CateoggryID: 1,
    //   Img: "assets/imgs/download.jpg"
    // }, {
    //   ID: 4,
    //   Name: "Table",
    //   Price: 2100,
    //   Quantity: 25,
    //   CateoggryID: 2,
    //   Img: "assets/imgs/images (1).jpg"
    // }, {
    //   ID: 5,
    //   Name: "Table",
    //   Price: 1500,
    //   Quantity: 20,
    //   CateoggryID: 2,
    //   Img: "assets/imgs/images (3).jpg"
    // },
    // {
    //   ID: 6,
    //   Name: "Table",
    //   Price: 7000,
    //   Quantity: 15,
    //   CateoggryID: 2,
    //   Img: "assets/imgs/images (4).jpg"
    // },
    // {
    //   ID: 7,
    //   Name: "Table",
    //   Price: 80000,
    //   Quantity: 3,
    //   CateoggryID: 2,
    //   Img: "assets/imgs/images (5).jpg"
    // },
    // {
    //   ID: 8,
    //   Name: "Bed",
    //   Price: 20000,
    //   Quantity: 15,
    //   CateoggryID: 3,
    //   Img: "assets/imgs/images (6).jpg"
    // }, {
    //   ID: 9,
    //   Name: "Table",
    //   Price: 25000,
    //   Quantity: 20,
    //   CateoggryID: 2,
    //   Img: "assets/imgs/images.jpg"
    // },
    // {
    //   ID: 10,
    //   Name: "Table",
    //   Price: 1500,
    //   Quantity: 20,
    //   CateoggryID: 2,
    //   Img: "assets/imgs/table.jpg"
    // },
    // ];

  }


  //filtering the product
  //Filter options
  _filter_List: Iproduct[] = [];
  private _filter: string = '';

  @Input() get filter_List() {
    return this._filter;
  }

  set filter_List(value: string) {
    this._filter = value;
    this._filter_List = this.serivceList.performFilter(value)
  }
  // _filter_List2: Iproduct[] = [];

  // private _filter2: number = 0;

  // @Input() get filter_List2() {
  //   return this._filter2;
  // }

  // set filter_List2(value: number) {
  //   this._filter2 = value;
  //   this._filter_List2 = this.serivceList.performFilter2(value)
  // }
  // Select An Item from List

  onSelected(value: string): void {
    this._filter = value;
    this._filter_List = this.serivceList.performFilter(value)
  }
  onSelectedPrice(value: string): void {
    this._NumX = parseInt(value);
    console.log(this._NumX);
    this._find_List = this.serivceList.performFind(this._NumX);
  }

  //Find Option
  _find_List!: any;
  private _NumX: number = 1;

  set NumX(value: number) {
    this._NumX = value;
    this._find_List = this.serivceList.performFind(value);
  }
  @Input() get NumX(): number {
    return this._NumX;

  }


  // Show , Remove the list of products
  Show: boolean = false;
  Remove: boolean = true;
  removeToggle() {
    this.Remove = !this.Remove;
    this.Show = !this.Show;
  }

  //Date
  date1: Date = new Date();

// watch the div

  // To match IDS
  getIdProduct(index: number) {
    this.router.navigate(['/product', index])
  }
  // Create split String
  inputvalue: string = "";
  set inputValue(value: string) {
    this.inputvalue = value;
  }
  get inputValue(): string {
    return this.inputvalue;
  }

  // InterFace Function
  ngOnChanges(): void {
    this._find_List = this.serivceList.getAllProds();
  }
  ngOnInit(): void {
    this._find_List = this.serivceList.productList;
    this._filter_List = this.serivceList.productList;
  }

  num:number = 0;
  tableList2: Iproduct[] = [];

  @Output() addCardInTableEvent: EventEmitter<Iproduct[]> = new EventEmitter<Iproduct[]>();

  addCardInTables2(index: Iproduct) {

    if (!this.tableList2.includes(index)) {
      this.tableList2.pop();
      index.Quantity-=1;
      index.id=1;
      this.num=index.Price;
      this.tableList2.push(index);
      this.addCardInTableEvent.emit(this.tableList2);
    }
else
  {
    index.id+=1;
    index.Price=this.num*index.id;

    index.Quantity-=1;

  }

  }

  AddDiv(index: Iproduct)  {
    if(index.Quantity!=0)
    {
      index.Quantity = index.Quantity - 1;

    }
  }
}

  //Sorted Product
  //Event for sorting
  // @Output() eventSort:EventEmitter<Iproduct[]>=new EventEmitter<Iproduct[]>();

  //   Sorted() {
  //  var sortedItems = this.serivceList.productList.sort((a,b)=>{
  //       if(a.Name<b.Name){
  //         return 1;
  //       }
  //       if(a.Name>b.Name){
  //         return -1;
  //       }
  //       return 0;
  //     });

  //   // fire event
  //   this.eventSort.emit(sortedItems);
  //   }


  // tableList:Iproduct[]=[];

  // addCardInTables(index :number){
  // var pushedCard = this.tableList.push(this.serivceList.productList[index-1]);
  // console.log(pushedCard);

  // }

  // performFilter(Fby: string): Iproduct[] {
  //   Fby = Fby.toLocaleLowerCase();
  //   return this.productList.filter((product: Iproduct) =>
  //     product.Name.toLocaleLowerCase().includes(Fby)
  //   );
  // }

  //////
  // performFind(Fby: number) {
  //   return this.productList.find((product: Iproduct) =>
  //     product.Price == Fby
  //   );
  // }



