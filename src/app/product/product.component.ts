import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../Services/Models/product";
import { Shoppingcart } from "../Services/Models/shoppingcart";
import { ProductService } from "../Services/product.service";
import { ProductcartService } from "../Services/productcart.service";
import { UserService } from "../Services/user.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private addingToCart: boolean = false;

  key: string;
  category: string;
  quantity: number;
  product: Product;

  constructor(private productService: ProductService
              ,private userService: UserService
              ,private productcartService: ProductcartService
              ,private actRoute: ActivatedRoute) { 
   
  }

  ngOnInit() {

    this.actRoute.params.subscribe(par => {
        this.key = par["key"];
        
        this.productService.getProductByKey(this.key).subscribe(
          
          (arrResults) => this.product = arrResults[0] 
          /*new Product(arrResults[0].$key,arrResults[0].name
                                                      ,arrResults[0].price,
                                                      this.category,arrResults[0].description)*/

        );

      });

  }


  public addToCart()
  {
      this.addingToCart = true;
      this.productcartService.addProductCart(this.userService.userLogged.$key,this.key,this.quantity);

      this.addingToCart = false;
  }

}
