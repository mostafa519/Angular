import { Injectable } from '@angular/core';
import { Iproduct } from '../modulees/iproduct';

@Injectable({
  providedIn: 'root'
})
export class TShirtService {
  productTChList: Iproduct[];
  constructor() {

    this.productTChList=[
      {
        id: 1,
        Name: "Man T-Shirt",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (1).jpg"
    },
      {
        id: 2,
        Name: "Man T-Shirt",
        Price: 300,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (2).jpg"
    },
      {
        id: 3,
        Name: "Man T-Shirt",
        Price: 200,
        Quantity: 10,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (3).jpg"
    },
      {
        id: 4,
        Name: "Man T-Shirt",
        Price: 50,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (4).jpg"
    },
      {
        id: 5,
        Name: "Man T-Shirt",
        Price: 400,
        Quantity: 110,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (5).jpg"
    },
      {
        id: 6,
        Name: "Man T-Shirt",
        Price: 400,
        Quantity: 10,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (6).jpg"
    },
      {
        id: 7,
        Name: "Man T-Shirt",
        Price: 420,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (7).jpg"
    },
      {
        id: 8,
        Name: "Man T-Shirt",
        Price: 400,
        Quantity: 10,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (8).jpg"
    },
      {
        id: 9,
        Name: "Man T-Shirt",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (9).jpg"
    },
      {
        id: 10,
        Name: "Man T-Shirt",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (10).jpg"
    },
      {
        id: 11,
        Name: "Man T-Shirt",
        Price: 450,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (11).jpg"
    },
      {
        id: 12,
        Name: "Man T-Shirt",
        Price: 100,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (12).jpg"
    },
      {
        id: 13,
        Name: "Man T-Shirt",
        Price: 500,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1 (13).jpg"
    },
      {
        id: 14,
        Name: "Man T-Shirt",
        Price: 100,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/T_chairt/1.jpg"
    },
    {
      id: 15,
      Name: "Man T-Shirt",
      Price: 400,
      Quantity: 100,
      CateoggryID: 1,
      Img: "assets/imgs/T_chairt/1 (1).jpg"
  },
  ]
  }
  getProductByID(prodId:number):Iproduct|undefined {
    return this.productTChList.find(prd=>prd.id==prodId);
  }
  getTshirtIDs():number[]{
    return this.productTChList.map(prd=>prd.id)
  }
}
