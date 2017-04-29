/* tslint:disable:no-unused-variable */

import { TestBed, async,ComponentFixture, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';

let mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

fdescribe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Router, useValue: mockRouter }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents()
  });

  beforeEach(inject([Router], (router: Router) => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
      expect(component).toBeTruthy();
    }) );

  it('should route to home page',async( ()=> {
      const navurl = mockRouter.navigateByUrl.calls.first().args[0];
      expect(navurl).toBe('home');
    }) ) ;

} );
