/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA,DebugElement } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductlistComponent } from './productlist.component';
import { Product } from "../Services/Models/product";
import { ProductService } from "../Services/product.service";

import {Observable} from 'rxjs/Observable';
import { Subject } from "rxjs";

let fakeProductService = jasmine.createSpyObj('ProductService',['getProductsByCategory','searchProducts']);
//let fakeActivatedRoute = jasmine.createSpyObj('ActivatedRoute',null);//, ['navigateByUrl']);

class FakeActivatedRoute {
  params: Observable<any> = Observable.from([{category: "all"}]);
}

class FakeProductService {

  public arrProducts = [];
  public term$ = new Subject();

  getProductsByCategory(){
    return Observable.of([{$key: "fakekeyprod",
                          category: "fakeprodcateg",
                          description: "fakeproddesc",
                          name: "fakeprodname",
                          price: 9999.99
                          }]);

  }
  searchProducts(){
    return Observable.of([{$key: "fakekeyprod",
                          category: "fakeprodcateg",
                          description: "fakeproddesc",
                          name: "fakeprodname",
                          price: 9999.99
                          }]);
  }
}




describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistComponent ],
      providers: [
        { provide: ProductService, useClass: FakeProductService },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(inject([ProductService, ActivatedRoute], (productService : ProductService, actRoute: ActivatedRoute) => {
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async( ()=> {
    expect(component).toBeTruthy();
  }));


  it('should render at least one product', async( ()=> {

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('img')).toBeTruthy();

  }));

});
