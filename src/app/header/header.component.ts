import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	public isUserLoggedIn: boolean = false;

  private arrResults = [];
  private productName: string;

  private term$ = new Subject();

  constructor(private productService: ProductService) {

    this.term$
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(term => {
        this.productService.search(this.productName).subscribe(results => {
          this.arrResults = results;
        })
      });
  }

  ngOnInit() {
  }

  onSearch()
	{
    this.term$.next(this.productName);
  }

}
