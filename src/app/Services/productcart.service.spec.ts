/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductcartService } from './productcart.service';
import { AngfirebaseService } from '../Services/angfirebase.service';


let fakeAngularFireService = jasmine.createSpyObj('AngfirebaseService',['list','object','getQueryByChild','getQueryByKey']);

describe('ProductcartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductcartService,
      { provide: AngfirebaseService, useValue: fakeAngularFireService }]
    });
  });

  it('should inject', inject([ProductcartService], (service: ProductcartService) => {
    expect(service).toBeTruthy();
  }));
});
