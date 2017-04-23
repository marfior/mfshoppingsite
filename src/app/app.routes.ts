import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {RegisterComponent} from "./register/register.component";
import {ProductlistComponent} from "./productlist/productlist.component";
import {ProductComponent} from "./product/product.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'productlist/:category', component: ProductlistComponent},
  { path: 'product/:category/:key', component: ProductComponent},
];