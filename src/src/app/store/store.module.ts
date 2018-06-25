import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule, Http } from "@angular/http";
import { CategoriesComponent } from './categories/categories.component';
import { ApiManagerService } from "app/services/api-manager.service";
import { TranslateModule } from "ng2-translate";
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CartComponent } from './cart/cart.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule }   from '@angular/forms';
import { CartService } from "app/store/cart.service";
import { CustomerLoginComponent } from './customer-login/customer-login.component';

const routes: Routes = [
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent },
  {path: 'categories/:catSlug', component: CategoryDetailComponent },
  {path: 'products/:prodSlug', component: ProductDetailComponent },
  {path: 'cart', component: CartComponent },
  {path: 'checkout', component: CheckoutComponent},
  {path: 'login', component: CustomerLoginComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    TranslateModule,
    FormsModule
  ],
  declarations: [CheckoutComponent, CategoriesComponent, CategoryDetailComponent, ProductDetailComponent, CartComponent, CustomerLoginComponent],
  providers: [ApiManagerService, CartService ]
})
export class StoreModule { }
