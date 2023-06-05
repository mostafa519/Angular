import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Service/admin.service';
import { ApiServerService } from 'src/app/Service/api-server.service';
import { CategoryService } from 'src/app/Service/category.service';
import { NewUserService } from 'src/app/Service/new-user.service';
import { ICategory } from 'src/app/modulees/icategory';
import { Iproduct } from 'src/app/modulees/iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  categories: ICategory[] = [];
  productArrs: Iproduct[] = [];
  product11: Iproduct = {} as Iproduct;

  constructor(private catApiService: CategoryService, private IproductS: NewUserService,
    private adminApiService: AdminService,
    private prdApiService: ApiServerService, private router: Router) {
    this.catApiService.getAllCategoriesAPI().subscribe(categories => {
      this.categories = categories;
      // console.log(this.categories);
    });

  };
  ngOnInit(): void {
    this.prdApiService.getAllProducts().subscribe({
      next: (data) => {
        // console.log(data);
        this.productArrs = data.map((product11) => {
          return product11;
        });

      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    });
  };

  delete(num: number) {
    console.log(this.productArrs);
    let x = this.productArrs.find((n1) => {
      return n1.id == num

    })
    if (x) {
      let confirmValue = confirm('Are you sure you want to delete this product');
      if (confirmValue) {
        this.adminApiService.deleteProduct(x).subscribe({
          next: (prd) => {
            console.log(prd);
            alert('Product deleted successfully');
            this.router.navigate(['/main']);
          },
          error: (err) => {
            alert('Error With Delete Product' + err.message)
          },
        });
      }

    }
    else {
      alert("Enter valid id");
    }
  }

  Update(num: number) {
    console.log(this.productArrs);
    let x = this.productArrs.find((n1) => {
      return n1.id == num

    })

    if (x) {
      this.product11=x;
        this.adminApiService.updateProduct(this.product11).subscribe({
          next: (prd) => {
            console.log(prd);
          },
          error: (err) => {
            alert('Error With update Product' + err.message)
          },
        });

      }
    else {
      alert("Enter valid id");
    }

  }


  // add from form

  addFromForm(num: number) {
    let x = this.productArrs.find((n1) => {
      return n1.id == num
    })
   if(num!=x?.id){
    this.adminApiService.addProduct(this.product11).subscribe({
      next: (user1) => {
        this.router.navigate(['/main']);
        alert('Product Add successfully');
        console.log(user1);
      },
      error: (error) => {
        console.log(error);
      },
    });
   }
   else{
    alert("Please,Enter Good ID !!!")
   }
  }
  //add from button
  AddItem() {
    let product1: Iproduct =
    {
      "id": 150,
      "Name": "Man",
      "Price": 4000,
      "Quantity": 100,
      "CateoggryID": 1,
      "Img": "assets/imgs/Babys/1 (5).jpg"
    }

    console.log(product1);

    this.adminApiService.addProduct(product1).subscribe({
      next: (p1) => {
        this.router.navigate(['/Dress']);
        alert('Product Add successfully');
        console.log(p1);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
