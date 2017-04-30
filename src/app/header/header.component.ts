import { Component, OnInit } from '@angular/core';
import { Subject } from "rxjs";
import { Router } from '@angular/router';

import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";
import { ProductcartService } from "../Services/productcart.service";
import { UserService } from "../Services/user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private arrSearchRes = [];
  private productName: string;

  private countProductscart: number = 0;

  
  constructor(private productService: ProductService
            , private userService: UserService
            , private productcartService: ProductcartService
            , private router: Router) {

     this.productcartService.getProductscartByUser(this.userService.userLogged.$key)
                               .subscribe( (productsRes) => this.countProductscart = productsRes.length );
  }

  ngOnInit() {
  }

  onStartSearch()
  {
    this.router.navigateByUrl('productlist');
  }

  onSearch()
	{
    this.productService.search(this.productName);
  }

}
