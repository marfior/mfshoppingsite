/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductService } from './product.service';
import { AngfirebaseService } from '../Services/angfirebase.service';


let fakeAngularFireService = jasmine.createSpyObj('AngfirebaseService',['list','object','getQueryByChild','getQueryByKey']);

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService,
      { provide: AngfirebaseService, useValue: fakeAngularFireService }]
    });
  });

  it('should inject', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
