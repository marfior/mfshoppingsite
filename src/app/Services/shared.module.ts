import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AngfirebaseService } from "./angfirebase.service";

import { User } from "./Models/user";
import { UserService } from "./user.service";


@NgModule({
  imports: [
	CommonModule,
  ],
  providers: [UserService, AngfirebaseService],
  declarations: []
})
export class SharedModule { }
