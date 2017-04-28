import { Injectable } from '@angular/core';
import { User } from "./Models/user";
import { Product } from "./Models/product";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import { Subject } from "rxjs";


//import { FirebaseListObservable } from 'angularfire2';

import { AngfirebaseService } from '../Services/angfirebase.service';


@Injectable()
export class ProductService {

  public arrProducts = [];
  public term$ = new Subject();

  constructor(private afs: AngfirebaseService) {

  }

  private listProducts(query: Object)
  {
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
                                          (arrResults) => this.arrProducts = arrResults as Product[]
                                        );
  }

  public getProductByKey(key: string)
  {
    return this.listProducts(this.afs.getQueryByKey('key',key)).map( 
                                                                (arrProducts) => <Product>arrProducts[0]
                                                              );
  }

  public getAllProducts()
  {
    return this.listProducts(undefined).map( 
                                            (arrResults) => arrResults as Product[]
                                            );
  }

  public searchProducts(term) {
      let fireobsv = this.getAllProducts();

      if (term.length == 1){
        return fireobsv.debounceTime(4000);
      }

      return fireobsv;
  }

  public search(term)
  {
     this.term$.next(term);
  }

}
