import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgDirectiveDirective } from './Directive/img-directive.directive';
import { ImgDirectivesDirective } from './Directive/img-directives.directive';
import { DiscountValuePipe } from './Pipe/discount-value.pipe';
import { ParentIproductComponent } from './component/parent-iproduct/parent-iproduct.component';
import { CardCustomPipe } from './Pipe/card-custom.pipe';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { GroupListComponentComponent } from './component/group-list-component/group-list-component.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { ProductsComonentComponent } from './component/products-comonent/products-comonent.component';
import { TShirtsComponent } from './component/tshirts/tshirts.component';
import { DressesComponent } from './component/dresses/dresses.component';
import { ObservableTestsComponent } from './component/observable-tests/observable-tests.component';
import { AdminComponent } from './component/admin/admin.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ProductListComponent,
    ImgDirectiveDirective,
    ImgDirectivesDirective,
    DiscountValuePipe,
    ParentIproductComponent,
    CardCustomPipe,
    NotFoundComponent,
    GroupListComponentComponent,
    ProductDetailsComponent,
    LogInComponent,
    ProductsComonentComponent,
    TShirtsComponent,
    DressesComponent,
    ObservableTestsComponent,
    AdminComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
