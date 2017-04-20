import { Injectable } from '@angular/core';
import { User } from "./Models/user";
import { Product } from "./Models/product";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

import { FirebaseListObservable } from 'angularfire2';

import { AngfirebaseService } from '../Services/angfirebase.service';


@Injectable()
export class ProductService {

  constructor(private afs: AngfirebaseService) {

  }


  public addProduct(product: Product)
  {
		this.afs.af.database.list("/products").push(product);
	}


  public search(term): Observable<any> {

    let fireobsv = this.afs.af.database.list('/products',{ 
									query: {
										orderByChild: 'name',
										equalTo: term, 
									}
								}).map( 
										(arrUsers) => arrUsers
										);

    if (term.length == 1){
      return fireobsv.debounceTime(4000);
    }

    return fireobsv;
  }

}
