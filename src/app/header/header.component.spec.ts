/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA,DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';

import { Productcart } from "../Services/Models/productcart";
import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";
import { ProductcartService } from "../Services/productcart.service";
import { UserService } from "../Services/user.service";
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

let fakeProductService = jasmine.createSpyObj('ProductService',['search']);
let fakeProductcartService = jasmine.createSpyObj('ProductcartService',['getProductscartByUser']);
let fakeRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: ProductService, useValue: fakeProductService },
        { provide: UserService, useClass: FakeUserService },
        { provide: ProductcartService, useValue: fakeProductcartService },
        { provide: Router, useValue: fakeRouter },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fakeProductcartService.getProductscartByUser.and.returnValue(Observable.of([<Productcart>{$key: "fakekeyprodcart",
                                                                                    userkey : "fakeuserkey",
                                                                                    productkey: "fakekeyprod1",
                                                                                    quantity: 999,
                                                                                    totalprice: 777}]));

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to product list when clicking on "Search product" text box', async( ()=> {

    component.productNameTerm = "";
    component.onStartSearch();

    const navurl = fakeRouter.navigateByUrl.calls.first().args[0];
    expect(navurl).toBe('productlist');
  }));

  it('should call product search when typing in "Search product" text box', async( ()=> {

    component.productNameTerm = "start search";
    component.onSearch();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(fakeProductService.search).toHaveBeenCalled();
  }));

  /*it('should show shopping cart link when user is logged in', async( ()=> {

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#lnkShoppingCart').hasAttribute('hidden')).toEqual(false);
  }));*/


});
