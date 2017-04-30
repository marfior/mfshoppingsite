/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA,Directive,Component,DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,  Validators,  FormBuilder, FormsModule } from '@angular/forms';

import { SigninComponent } from './signin.component';
import { RegisterComponent } from '../register/register.component';
import { User } from "../Services/Models/user";
import { UserService } from "../Services/user.service";

import {Observable} from 'rxjs/Observable';


let fakeUserService = jasmine.createSpyObj('UserService',['getUserByEmail']);
let fakeRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);


describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
         FormsModule,
      ],
      declarations: [ SigninComponent ],
      providers: [
        { provide: UserService, useValue: fakeUserService },
        { provide: Router, useValue: fakeRouter }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach( () => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getFakeFormValues() : any
  {
      return new FormGroup({
          email: new FormControl("fake@email.com", Validators.required),
          password: new FormControl("fakepassword", Validators.required)
        });
  }

  it('should try to sign in with a non existing email and show a "not yet registered" message', async( ()=> {

      fakeUserService.getUserByEmail.and.returnValue(Observable.of(null));
   
      let loginForm: any  = getFakeFormValues();
      component.onSubmit(loginForm);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('#errIncorrectUser').hasAttribute('hidden')).toEqual(false);
  }) ) ;

  it('should try to sign in with an existing user and a wrong password and show an "incorrect password" message', async( ()=> {

      fakeUserService.getUserByEmail.and.returnValue(Observable.of(<User>{ email: "fake@email.com", password: "incorrectfakepassword" }));
   
      let loginForm: any  = getFakeFormValues();
      component.onSubmit(loginForm);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('#errIncorrectPassword').hasAttribute('hidden')).toEqual(false);
      //expect(compiled.querySelector('div').textContent).toContain('Incorrect password');
  }) ) ;

  it('should try to sign in with an existing user and a correct password and route to home page', async( ()=> {

      fakeUserService.getUserByEmail.and.returnValue(Observable.of(<User>{ email: "fake@email.com", password: "fakepassword" }));
   
      let loginForm: any  = getFakeFormValues();
      component.onSubmit(loginForm);
      fixture.detectChanges();

      const navurl = fakeRouter.navigateByUrl.calls.first().args[0];
      expect(navurl).toBe('home');
  }) );


});
