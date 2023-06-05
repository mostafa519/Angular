import { AdminComponent } from './component/admin/admin.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { ProductsComonentComponent } from './component/products-comonent/products-comonent.component';
import { DressesComponent } from './component/dresses/dresses.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ParentIproductComponent } from './component/parent-iproduct/parent-iproduct.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TShirtsComponent } from './component/tshirts/tshirts.component';
import { ObservableTestsComponent } from './component/observable-tests/observable-tests.component';
import { userItemGuard } from './Guards/user-item.guard';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: ParentIproductComponent, title: "Home" },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ParentIproductComponent, title: 'Home' },
  { path: 'main', component: ProductsComonentComponent, title: "Main Component",canActivate:[userItemGuard] },
  { path: 'T-Shirt', component: TShirtsComponent, title: "Some T-shirt" },
  { path: 'Dress', component: DressesComponent, title: "Some Dress" },
  { path: 'login', component: LogInComponent, title: "LogIn" },
  {path:"Rform",component:ReactiveFormComponent,title:"reactive form"},
  {path:"admin",component: AdminComponent, title: "Admin"},
  // { path: 'logout', component: LogInComponent, title: "LogOut" },
  {
    path: 'Profile',
    loadChildren: () => import('src/app/component/custom-add-components/custom-add-components.module').then(m => m.CustomAddComponentsModule)

  },
  {
    path:'obs',component:ObservableTestsComponent,title:'Observable'
  },
  { path: 'details', component: ProductDetailsComponent, title: "Components" },
  { path: 'product/:PrdID', component: ProductDetailsComponent, title: "Product Details" },
  // {path: 'product/:PrdID', component:ProductDetailsComponent ,title:"Product Custom Details"},
  { path: '**', component: NotFoundComponent, title: "Not Found Page" }

  // {path :'groups',component:GroupListComponentComponent,children:[
  //   {path:'',redirectTo:'/product',pathMatch:'full'},
  //   {path:'products',component:ParentIproductComponent,title:'Home'},
  //   {path: 'main', component:MainComponent , title:"Main Component"},
  //   {path: 'product', component:ProductListComponent ,title:"second Page"},

  // ]},
  // {path:'**',component:NotFoundComponent,title:"Not Found Page"}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
