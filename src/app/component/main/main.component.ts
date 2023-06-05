import { Component } from '@angular/core';
import { Iproduct } from './../../modulees/iproduct';

import { Store } from 'src/app/modulees/store';
import{ DiscountOffers} from 'src/app/modulees/discount-offers'
// import {TrackInfdo} from 'src/app/modulees/track-infdo'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {



  Store1: Store = new Store("Mostafa", ["Assuit", "Sohag", "Qena"], "assets/imgs/nature-3082832__340.jpg");

Iproduct1:Iproduct ={
  id:5,
  Name: "Computers",
  Quantity:10,
  Price:1500,
  Img :"assets/imgs/nature-3082832__340.jpg",
  CateoggryID:10
}
_Name = "WelCome Mustafa";
showDivs: boolean = true;
showDiv(){
this.showDivs=!this.showDivs;
}
}
