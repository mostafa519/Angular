import { Injectable } from '@angular/core';
import { Iproduct } from '../modulees/iproduct';

@Injectable({
  providedIn: 'root'
})
export class WomanDressService {
  productWoman: Iproduct[];
  constructor() {

    this.productWoman=[
      {
        id: 1,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (1).jpg"
    },
      {
        id: 2,
        Name: "Fun Dress",
        Price: 500,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (2).jpg"
    },
      {
        id: 3,
        Name: "Funny Dress",
        Price: 600,
        Quantity: 10,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (3).jpg"
    },
      {
        id: 4,
        Name: "Funny",
        Price: 300,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (4).jpg"
    },
      {
        id: 5,
        Name: "Fun Dress",
        Price: 470,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (5).jpg"
    },
      {
        id: 6,
        Name: "Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (6).jpg"
    },
      {
        id: 7,
        Name: "Amazing",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (7).jpg"
    },
      {
        id: 8,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (8).jpg"
    },
      {
        id: 9,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (9).jpg"
    },
      {
        id: 10,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (20).jpg"
    },
      {
        id: 11,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (11).jpg"
    },
      {
        id: 12,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (25).jpg"
    },
      {
        id: 13,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (14).jpg"
    },
      {
        id: 14,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (20).jpg"
    },
      {
        id: 15,
        Name: "Fun Dress",
        Price: 400,
        Quantity: 100,
        CateoggryID: 1,
        Img: "assets/imgs/Woman/1 (22).jpg"
    },

  ]
  }
}
