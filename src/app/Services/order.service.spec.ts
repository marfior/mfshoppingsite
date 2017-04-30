/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { OrderService } from './order.service';
import { Order } from "./Models/order";
import { AngfirebaseService } from '../Services/angfirebase.service';
import { FirebaseListObservable } from 'angularfire2';

import {Observable} from 'rxjs/Observable';


let fakeAngularFireService = jasmine.createSpyObj('AngfirebaseService',['list','push','object','getQueryByChild','getQueryByKey']);

describe('OrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService,
      { provide: AngfirebaseService, useValue: fakeAngularFireService }]
    });
  });

  it('should inject', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  
  /*it('should add order', inject([OrderService, AngfirebaseService], (service: OrderService, afs: AngfirebaseService) => {

    fakeAngularFireService.list.and.returnValue(Observable.of([{}]));
   
    debugger;
    let order = <Order>{ $key: undefined,	totalprice : 999,	checkoutdate: "28/04/2017" };

    //spyOn(service,'addOrder');
    spyOn(service,'addOrder').and.returnValue(Observable.from("fakekey"));

    //let args = service.addOrder.arguments;
    service.addOrder(order); //.then( (key) => {return key } );
    //expect().toBeDefined(true);
    //expect(service.addOrder).toContain("fakekey"); //.toHaveBeenCalled();
    expect(service).toBeTruthy();

  }));*/

  /*it('should add order item', inject([OrderService, AngfirebaseService], (service: OrderService, afs: AngfirebaseService) => {

    fakeAngularFireService.list.and.returnValue(Observable.of([{}]));
   
    debugger;
    let order = <Order>{ $key: undefined,	totalprice : 999,	checkoutdate: "28/04/2017" };

    spyOn(service,'addOrder');
    //spyOn(service,'addOrder').and.returnValue(Observable.of("fakekey"));

    //let args = service.addOrder.arguments;

    //expect(service.addOrder(order).then( (key) => {return key } )).toBeDefined(true);
    expect(service.addOrder).toHaveBeenCalled();
    expect(service).toBeTruthy();

  }));*/

});
