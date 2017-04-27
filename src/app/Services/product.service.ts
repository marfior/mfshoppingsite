import { Injectable } from '@angular/core';
import { User } from "./Models/user";
import { Product } from "./Models/product";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

//import { FirebaseListObservable } from 'angularfire2';

import { AngfirebaseService } from '../Services/angfirebase.service';


@Injectable()
export class ProductService {

  constructor(private afs: AngfirebaseService) {

  }

  private listProducts(query: Object)
  {
    //return this.afs.af.database.list("/products",query);
    return this.afs.list("/products",query);
  }

  public getProductsByCategory(category: string)
  {
      let query: Object = undefined;
      if (category != "all")
      {
          query = this.afs.getQueryByChild('category',category);
      }

      return this.listProducts(query).map( 
                                          (arrProducts) => arrProducts
                                        );
  }

  public getProductByKey(key: string)
  {
    return this.listProducts(this.afs.getQueryByKey('key',key)).map( 
                                                                (arrProducts) => <Product>arrProducts
                                                              );
  }

  /*public addProduct(product: Product)  {
		this.listProducts(null).push(product);
	}*/

  public search(term): Observable<any> {

    let fireobsv = this.listProducts(this.afs.getQueryByChild('name',term)).map( 
										                                      (arrResults) => <Product>arrResults
										                                      );

    if (term.length == 1){
      return fireobsv.debounceTime(4000);
    }

    return fireobsv;
  }

}
