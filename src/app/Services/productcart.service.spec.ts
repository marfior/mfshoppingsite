/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductcartService } from './productcart.service';

describe('ProductcartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductcartService]
    });
  });

  it('should ...', inject([ProductcartService], (service: ProductcartService) => {
    expect(service).toBeTruthy();
  }));
});
