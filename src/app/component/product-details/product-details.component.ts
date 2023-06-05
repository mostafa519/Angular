import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TShirtService } from 'src/app/Service/tshirt.service';
import { Iproduct } from 'src/app/modulees/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  Prd: number = 0;
  returnedCurrentIndex: number = 0;
  returnNumIds:number[]=[];
  product:Iproduct|undefined;
  product2 :Iproduct|undefined ;
  constructor(private getSerivce: TShirtService, private activateSerivce: ActivatedRoute ,private router: Router) {

  }
  ngOnInit(): void {


 this.returnNumIds=this.getSerivce.getTshirtIDs();

 this.activateSerivce.paramMap.subscribe((params) => {
  this.Prd = params.get('PrdID')
    ? Number(params.get('PrdID'))
    : 0;

  let resultOfFoundedPrd = this.getSerivce.getProductByID(this.Prd);
  if (resultOfFoundedPrd) {
    this.product = resultOfFoundedPrd;
  } else {
    alert('not found');
  }
});

  }
  back_Home(){
this.router.navigate(['T-Shirt']);
  }

  prevFunc() {
    this.returnedCurrentIndex= this.returnNumIds.indexOf(this.Prd);
   this.router.navigate(["/product",this.returnNumIds[--this.returnedCurrentIndex]]);
  }
    nextFunc() {
    this.returnedCurrentIndex= this.returnNumIds.indexOf(this.Prd);
   this.router.navigate(["/product",this.returnNumIds[++this.returnedCurrentIndex]]);
  }
}
