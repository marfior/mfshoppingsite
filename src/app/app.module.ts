import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from "./app.routes";

import { AlertModule } from 'ng2-bootstrap';

import {User} from "./Classes/user";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';

import {UserService} from "./Services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AlertModule.forRoot(),
	RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
