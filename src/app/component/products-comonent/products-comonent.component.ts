import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServerService } from 'src/app/Service/api-server.service';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { TShirtService } from 'src/app/Service/tshirt.service';
import { WomanDressService } from 'src/app/Service/woman-dress.service';
import { Iproduct } from 'src/app/modulees/iproduct';

@Component({
  selector: 'app-products-comonent',
  templateUrl: './products-comonent.component.html',
  styleUrls: ['./products-comonent.component.scss']
})
export class ProductsComonentComponent {
constructor(public serivceList: TShirtService,
  private prdApiService:ApiServerService,
  private router:Router){

}
Product:Iproduct[]=[];
prds_Search: Iproduct[] = [];
//this.serivceList.productTChList.concat(this.products.productWoman,this.Prodct.productList);
ngOnInit(): void {
  this.prdApiService.getAllProducts().subscribe({
    next:(data)=>{

      this.Product=data;

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
