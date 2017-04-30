import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from "../Services/Models/order"
import { Product } from "../Services/Models/product";

import { Productcart } from "../Services/Models/productcart";
import { ProductService } from "../Services/product.service";
import { ProductcartService } from "../Services/productcart.service";
import { OrderService } from "../Services/order.service";
import { UserService } from "../Services/user.service";

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  private arrProductscart: Productcart[] = [];
  private arrProducts: Product[] = [];

  private checkingOut: boolean = false;
  private error: boolean = false;

  private order: Order = <Order>{};

  constructor(private productService: ProductService
            , private userService: UserService
            , private productcartService: ProductcartService
            , private orderService: OrderService
            , private router: Router) { }

  ngOnInit() {

  this.productService.getAllProducts()
                    .subscribe( (productsRes) => {
                        this.arrProducts = productsRes 
                        this.productcartService.getProductscartByUser(this.userService.userLogged.$key)
                            .subscribe( (productscartRes) => {
                              this.arrProductscart = productscartRes;

                              // set the total price of the cart
                              this.order.totalprice = 0;
                              this.arrProductscart.forEach((pc) =>{
                                this.arrProducts.forEach((p)=>{
                                    if (p.$key == pc.productkey){
                                      this.order.totalprice += (pc.quantity * p.price);
                                  }
                                })
                              })
                                                        
                            })
                     });


  }


  public removeProductcart(productcartkey: string)
  {
    this.productcartService.removeProductcart(productcartkey);
  }

  public checkOut()
  {
    this.checkingOut = true;

    this.order.checkoutdate = new Date().toLocaleDateString();   
    
    this.orderService.addOrder(this.order).then( (key) =>
    {
      this.order.$key = key;
      this.arrProductscart.forEach((pc) => {
      this.orderService.addItemOrder(this.order,pc).then( () =>
        this.productcartService.removeProductcart(pc.$key)
        ).then( () => {
          this.checkingOut = false;
          this.router.navigateByUrl('order/'+this.order.$key);
        });
      });
    });

    
  }


}
