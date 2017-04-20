import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AngfirebaseService } from "./angfirebase.service";

import { User } from "./Models/user";
import { UserService } from "./user.service";

import { Product } from "./Models/product";
import { ProductService } from "./product.service";

@NgModule({
  imports: [
	CommonModule,
  ],
  providers: [UserService, AngfirebaseService, ProductService],
  declarations: []
})
export class SharedModule { }
