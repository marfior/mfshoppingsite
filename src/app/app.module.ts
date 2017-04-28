import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from "./app.routes";
import { firebaseConfig } from "./app.firebaseconfig";

import { AlertModule } from 'ng2-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

import { SharedModule } from "./Services/shared.module";

import { EqualValidatorDirective } from './Directives/equal-validator.directive';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { HighlightmenuDirective } from './Directives/highlightmenu.directive';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    SigninComponent,
    EqualValidatorDirective,
    HomeComponent,
    ProductlistComponent,
    ProductComponent,
    ShoppingcartComponent,
    HighlightmenuDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	SharedModule,
	AlertModule.forRoot(),
	RouterModule.forRoot(appRoutes),
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
