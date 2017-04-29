/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,  Validators,  FormBuilder, FormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { User } from "../Services/Models/user";
import { UserService } from "../Services/user.service";

import {Observable} from 'rxjs/Observable';


let fakeUserService = jasmine.createSpyObj('UserService',['getUserByEmail','addUser']);
let fakeRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
         FormsModule,
      ],
      providers: [
        { provide: UserService, useValue: fakeUserService },
        { provide: Router, useValue: fakeRouter }
      ],
    })
    .compileComponents();
  }));

  beforeEach(inject([UserService, Router], (userService : UserService, router: Router) => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  function getFakeFormValues() : any
  {
      return new FormGroup({
          email: new FormControl("fake@email.com", Validators.required),
          name: new FormControl("fakename", Validators.required),
          surname: new FormControl("fakesurname", Validators.required),
          password: new FormControl("fakepassword", Validators.required)
        });
  }


  it('should try to add an already existing user and show "already taken" message', async( ()=> {
      fakeUserService.getUserByEmail.and.returnValue(Observable.of(<User>{ email: "fake@email.com"}));
   
      let registerForm: any = getFakeFormValues();
      component.onSubmit(registerForm);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('#errEmailTaken').hasAttribute('hidden')).toEqual(false);
  }) ) ;

  it('should try to add a non existing user and route to home page', async( ()=> {

      fakeUserService.getUserByEmail.and.returnValue(Observable.of(null));
   
      let registerForm: any = getFakeFormValues();
      component.onSubmit(registerForm);
      fixture.detectChanges();

      const navurl = fakeRouter.navigateByUrl.calls.first().args[0];
      expect(navurl).toBe('home');
  }) ) ;

 

});
