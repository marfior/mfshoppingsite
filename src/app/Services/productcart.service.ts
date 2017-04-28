import { Injectable } from '@angular/core';

import { Productcart } from "./Models/productcart";
import { ProductService } from "../Services/product.service";
import { AngfirebaseService } from '../Services/angfirebase.service';


@Injectable()
export class ProductcartService {

   constructor(private afs: AngfirebaseService) {

   }

  private listProductscart(query: Object) {
		return this.afs.list('/productscart',query);
	}

  public getProductscartByUser(userKey: string)  {
      return this.listProductscart(this.afs.getQueryByChild('userkey',userKey))
                 .map( (arrResults) => 
                        arrResults as Productcart[] 
                    )
                 ;
  }

  public addProductscart(productcart: Productcart){
      this.listProductscart(undefined).push(productcart);
  }

  public updateProductscart(productcart: Productcart){
      this.listProductscart(undefined).update(productcart.$key,productcart);
  }

  public removeProductcart(key: string){
      this.listProductscart(undefined).remove(key);
  }

  public getProductcart(productcart: Productcart)  {

    return this.getProductscartByUser(productcart.userkey)
              .map( (arrResults) =>
                    arrResults.filter(prod => productcart.productkey === prod.productkey)[0]
                  );
	}

}
