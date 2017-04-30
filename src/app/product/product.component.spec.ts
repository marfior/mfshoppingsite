/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { ProductComponent } from './product.component';

import { Productcart } from "../Services/Models/productcart";
import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";
import { ProductcartService } from "../Services/productcart.service";
import { UserService } from "../Services/user.service";
import { User } from "../Services/Models/user";

class FakeActivatedRoute {
  params: Observable<any> = Observable.from([{key: "fakekeyprod"}]);
}

class FakeUserService {
  public userLogged: User = <User>{};

  constructor(){
    this.userLogged.$key = "fakeuserkey";
  }
}

function getFakeProduct()
{
  return Observable.of( <Product>{$key: "fakekeyprod",
                                category: "fakeprodcateg",
                                description: "fakeproddesc",
                                name: "fakeprodname",
                                price: 999
                            });
}

let fakeProductService = jasmine.createSpyObj('ProductService',['getProductByKey']);
let fakeProductcartService = jasmine.createSpyObj('ProductcartService',['getProductcart','addProductscart','updateProductscart']);

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: ProductService, useValue: fakeProductService },
        { provide: UserService, useClass: FakeUserService },
        { provide: ProductcartService, useValue: fakeProductcartService },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    })
    .compileComponents();
  }));


  beforeEach( () => {
    
    fakeProductService.getProductByKey.and.returnValue(getFakeProduct() );

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', async( ()=> {                                     
    expect(component).toBeTruthy();
  }));

  it('should render product', async( ()=> {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('img')).toBeTruthy();
  }));


  it('should add product to cart when clicking "Add to cart" and show success message', async( ()=> {
  
    fakeProductcartService.getProductcart.and.returnValue(Observable.of(null));

    component.addToCart();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(fakeProductcartService.addProductscart).toHaveBeenCalled();

    expect(compiled.querySelector('#successAddedToCart').hasAttribute('hidden')).toEqual(false);
  }));

  it('should update an existing product in a cart with added quantity when clicking "Add to cart"', async( ()=> {

    fakeProductcartService.getProductcart.and.returnValue(Observable.of(<Productcart>{$key: "fakekeyprodcart",
                                                                                    userkey : "fakekeyuser",
                                                                                    productkey: "fakekeyprod",
                                                                                    quantity: 999,
                                                                                    totalprice: 777}));
    component.addToCart();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(fakeProductcartService.updateProductscart).toHaveBeenCalled();

    expect(compiled.querySelector('#successAddedToCart').hasAttribute('hidden')).toEqual(false);
  }));

  it('should show "register and login to buy" message if not logged in', inject([UserService], 
                                                                          (userService : UserService) => {
    userService.userLogged.$key = undefined;

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#infoRegisterToBuy').hasAttribute('hidden')).toEqual(false);
  }));

});
