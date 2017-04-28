import { Pipe, PipeTransform } from '@angular/core';

import { Product } from "../Services/Models/product";

@Pipe({
  name: 'filterProductByKey'
})
export class FilterProductByKeyPipe implements PipeTransform {

  transform(value: Array<Product>, prodkey?: any): any {
    return value.filter(p => p.$key == prodkey);
  }


}
