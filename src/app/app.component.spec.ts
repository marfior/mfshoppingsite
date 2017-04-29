/* tslint:disable:no-unused-variable */

import { TestBed, async,ComponentFixture, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';


class MockRouter {
  navigateByUrl(url: string) { return url; }
}

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Router, useClass: MockRouter }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
      expect(component).toBeTruthy();
    }) );


  it('should tell Router to navigate to home page',async( ()=> {
      inject([Router], (router: Router) => { 

      const spy = spyOn(router, 'navigateByUrl');
      const navurl = spy.calls.first().args[0];
      expect(navurl).toBe('home');
    } ) }));

} );
