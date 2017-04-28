import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {RegisterComponent} from "./register/register.component";
import {ProductlistComponent} from "./productlist/productlist.component";
import {ProductComponent} from "./product/product.component";
import {ShoppingcartComponent} from "./shoppingcart/shoppingcart.component";
import {OrderComponent} from "./order/order.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'productlist', component: ProductlistComponent},
  { path: 'productlist/:category', component: ProductlistComponent},
  { path: 'product/:key', component: ProductComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'order/:key', component: OrderComponent},
];