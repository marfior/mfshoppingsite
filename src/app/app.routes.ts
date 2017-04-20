import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SigninComponent} from "./signin/signin.component";
import {RegisterComponent} from "./register/register.component";


/**
 * Created by stc2 on 15/02/2017.
 */

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'register', component: RegisterComponent},
];