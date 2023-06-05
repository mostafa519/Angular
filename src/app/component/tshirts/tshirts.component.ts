import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServerService } from 'src/app/Service/api-server.service';
import { TShirtService } from 'src/app/Service/tshirt.service';
import { Iproduct } from 'src/app/modulees/iproduct';

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.scss']
})
export class TShirtsComponent implements OnInit {
  constructor(public serivceList: TShirtService,public router: Router,private prdApiService:ApiServerService){

  }
  prds_Search: Iproduct[] = []
  ProductTshirt:Iproduct[]=[];
  ProductTshirt2:Iproduct[]=this.serivceList.productTChList;
  ngOnInit(): void {
    this.prdApiService.getAllProducts().subscribe({
      next:(data)=>{

        this.ProductTshirt=data;

      },
      error:(err)=>{
        console.log("Error On Data");

      }
    })
  }
  searchWithMaterail(searchVal: any) {
    this.prdApiService.searchByPrdName(searchVal).subscribe((data) => {
      this.prds_Search = data;
    });
  }

  //ProductTshirt:Iproduct[]=this.serivceList.productTChList;
  getIdProduct(index: number) {
    this.router.navigate(['/product', index])
  }

}
