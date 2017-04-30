/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { OrderComponent } from './order.component';


class FakeActivatedRoute {
  params: Observable<any> = Observable.from([{key: "fakeorderkey"}]);
}

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponent ],
       providers: [
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    })
    .compileComponents();
  }));

  beforeEach(inject([ActivatedRoute], (actRoute: ActivatedRoute) => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the thank you message and order reference key', () => {

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#orderReferenceKey').hasAttribute('hidden')).toEqual(false);
  });
  
});
