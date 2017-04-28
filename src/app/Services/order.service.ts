import { Injectable } from '@angular/core';

import { Order } from "./Models/order";
import { Productcart } from "./Models/productcart";
import { ProductService } from "../Services/product.service";
import { AngfirebaseService } from '../Services/angfirebase.service';


@Injectable()
export class OrderService {

  constructor(private afs: AngfirebaseService) {

  }

  private listOrders(orderkey: string,query: Object) {
    return this.afs.list('/orders/'+ orderkey,query);
  }

  public addOrder(order: Order){
      return this.listOrders("",undefined).push(order);
  }

  public addItemOrder(order: Order, productcart: Productcart){
    return this.listOrders(order.$key, undefined).push(productcart);
  }

}
