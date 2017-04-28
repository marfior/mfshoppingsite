import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

   private arrProducts = [];

   private category: string;

   constructor(private productService: ProductService,private actRoute: ActivatedRoute) { 
      
      this.productService.term$
                        .debounceTime(500)
                        .distinctUntilChanged()
                        .subscribe(term => {
                          this.productService.searchProducts(term)
                                             .subscribe(arrResults => {
                                                this.arrProducts = arrResults;
                                              })
                                            });

  }

  ngOnInit() {

    this.actRoute.params.subscribe(par => {
        this.category = par["category"];

        this.productService.getProductsByCategory(this.category).subscribe(
          (arrResults) => this.arrProducts = arrResults
        );
      });

     
    
  }

  



}
