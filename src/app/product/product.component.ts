import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../Services/Models/product";
import { Productcart } from "../Services/Models/productcart";
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
  private addedToCart: boolean = false;
  private error: boolean = false;
  private quantityAddedToCart: number = 0;

  product: Product = <Product>{};
  productcart: Productcart = <Productcart>{};

  constructor(private productService: ProductService
              ,private userService: UserService
              ,private productcartService: ProductcartService
              ,private actRoute: ActivatedRoute) { 
   
  }

  ngOnInit() {
    
    this.actRoute.params.subscribe(par => {
        let key = par["key"];

        this.productService.getProductByKey(key)
                           .subscribe(
                                      (prod) => {
                                        this.product = prod
                                        this.productcart.userkey = this.userService.userLogged.$key;
                                        this.productcart.productkey = this.product.$key;
                                        this.productcart.quantity = 1;
                                      },(err) => this.error = true
                                    );
      });

  }


  public addToCart()
  {
      this.addingToCart = true;
      this.quantityAddedToCart = 0;
      
      this.productcartService.getProductcart(this.productcart)
                             .take(1)  // only take the first record even after adding to cart
                             .subscribe( (prodcart) => {
                                  if (prodcart == undefined)   // product never added to cart
                                  {
                                      this.productcart.totalprice = (this.product.price * this.productcart.quantity);
                                      this.productcartService.addProductscart(this.productcart);                                
                                  }
                                  else                        // update the quantity in the cart of the same product
                                  {
                                      prodcart.quantity += this.productcart.quantity;
                                      prodcart.totalprice = (this.product.price * prodcart.quantity);
                                      this.productcartService.updateProductscart(prodcart);                               
                                  }
                                  this.quantityAddedToCart = this.productcart.quantity;
                                  this.addedToCart = true;

                            },(err) => this.error = true                                    
                            ,() => this.addingToCart = false);

  }

}
