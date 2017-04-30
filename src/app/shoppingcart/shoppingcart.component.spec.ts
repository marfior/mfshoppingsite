/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { FilterProductByKeyPipe } from '../Pipes/filter-product-by-key.pipe';
import { ShoppingcartComponent } from './shoppingcart.component';

import { Productcart } from "../Services/Models/productcart";
import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";
import { ProductcartService } from "../Services/productcart.service";
import { UserService } from "../Services/user.service";
import { OrderService } from "../Services/order.service";
import { User } from "../Services/Models/user";

class FakeUserService {
  public userLogged: User = <User>{};

  constructor(){
    this.userLogged.$key = "fakeuserkey";
  }
}

function getFakeProducts()
{
  return Observable.of(
        [ <Product>{$key: "fakekeyprod1",category: "fakeprodcateg1",description: "fakeproddesc1",name: "fakeprodname1",price: 1999}
         ,<Product>{$key: "fakekeyprod2",category: "fakeprodcateg2",description: "fakeproddesc2",name: "fakeprodname2",price: 2999}]);
}

let fakeProductService = jasmine.createSpyObj('ProductService',['getAllProducts']);
let fakeProductcartService = jasmine.createSpyObj('ProductcartService',['getProductcart','getProductscartByUser','removeProductcart']);
let fakeOrderService = jasmine.createSpyObj('OrderService',['addOrder','addItemOrder']);
let fakeRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);



describe('ShoppingcartComponent', () => {
  let component: ShoppingcartComponent;
  let fixture: ComponentFixture<ShoppingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingcartComponent,FilterProductByKeyPipe ],
      providers: [
        { provide: ProductService, useValue: fakeProductService },
        { provide: UserService, useClass: FakeUserService },
        { provide: ProductcartService, useValue: fakeProductcartService },
        { provide: OrderService, useValue: fakeOrderService },
        { provide: Router, useValue: fakeRouter },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fakeProductService.getAllProducts.and.returnValue(getFakeProducts() );

    fakeProductcartService.getProductscartByUser.and.returnValue(Observable.of([<Productcart>{$key: "fakekeyprodcart",
                                                                                    userkey : "fakeuserkey",
                                                                                    productkey: "fakekeyprod1",
                                                                                    quantity: 999,
                                                                                    totalprice: 777}]));

    fixture = TestBed.createComponent(ShoppingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "register and login to view cart" message if not logged in', inject([UserService], 
                                                                          (userService : UserService) => {
    userService.userLogged.$key = undefined;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#warningLoginToViewCart').hasAttribute('hidden')).toEqual(false);
  }));

  /*it('should show "no products in the cart" message if logged in and cart empty', inject([ProductcartService], 
                                                                          (productcartService : ProductcartService)=> {
debugger;
    //fakeProductcartService.getProductscartByUser.and.returnValue(Observable.of([]));
     productcartService.getProductscartByUser = Observable.of([<Productcart>{}]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#infoNoProductsInCart').hasAttribute('hidden')).toEqual(false);
  }));*/


  it('should call removeProductcart when clicking "X" button', async( ()=> {

    component.removeProductcart("fakekeyprodcart");
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(fakeProductcartService.removeProductcart).toHaveBeenCalled();
  }));

  /*it('should create order - call addOrder, addItemOrder, removeProductcart and navigate to Order page on Checkout click', async( ()=> {

    component.checkOut();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(fakeOrderService.addOrder).toHaveBeenCalled();
    expect(fakeOrderService.addItemOrder).toHaveBeenCalled();
    expect(fakeProductcartService.removeProductcart).toHaveBeenCalled();

    const navurl = fakeRouter.navigateByUrl.calls.first().args[0];
    expect(navurl).toBe('order');
  }));*/

});
