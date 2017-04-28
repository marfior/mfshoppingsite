import { Component, OnInit } from '@angular/core';
import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";
import { ProductcartService } from "../Services/productcart.service";
import { UserService } from "../Services/user.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  private arrProductscart = [];
  private arrProducts = [];

  constructor(private productService: ProductService
            , private userService: UserService
            , private productcartService: ProductcartService) { }

  ngOnInit() {

    //if (this.userService.userLogged.$key != undefined) {
//.map( (productsRes) => this.countProductscart = productsRes.length )

                       debugger;
  this.productService.getAllProducts()
                    .subscribe( (productsRes) => {
                        this.arrProducts = productsRes 
                        this.productcartService.getProductscartByUser(this.userService.userLogged.$key)
                            .subscribe( (productscartRes) => {
                              this.arrProductscart = productscartRes;
                            })
                    });


  }


}
