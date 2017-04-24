import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";
import { ShoppingcartService } from "../Services/shoppingcart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  key: string;
  category: string;

  quantity: number;

  product: Product;

  constructor(private productService: ProductService,private shoppingcart: ShoppingcartService,private actRoute: ActivatedRoute) { 
   
  }

  ngOnInit() {

    this.actRoute.params.subscribe(par => {
        this.category = par["category"];
        this.key = par["key"];
      
        this.productService.getProductByKey(this.category,this.key).subscribe(
          
          (arrResults) => this.product = new Product(arrResults[0].$key,arrResults[0].name
                                                      ,arrResults[0].price,
                                                      this.category,arrResults[0].description)

            //this.test = "ddddd";
        );

      });

  }


  public addToCart()
  {


  }

}
