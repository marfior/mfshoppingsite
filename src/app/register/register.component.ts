import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";

import { UserService } from "../Services/user.service";
import { User } from "../Services/Models/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	registrationGroup: FormGroup;

	passwordControl = new FormControl('',Validators.required);
	confirmpassControl = new FormControl('',Validators.required);
  
	private user: User = new User(0,"","","","");
	private registering: boolean = false;
	

	constructor(private userService: UserService, private router: Router) { 
	}

	ngOnInit() {
	}

	onSubmit(form)
	{
		this.registering = true;
		this.user.email = form.controls.email.value;
		this.user.name = form.controls.name.value;
		this.user.surname = form.controls.surname.value;
		this.user.password = form.controls.password.value;
		
		this.userService.addUser(this.user);
		
		//this.router.navigateByUrl('signin');
		//console.log(user);
		//console.log(this.myGroup);
		//console.log(this.myGroup.value.name);
		//debugger;


	}
}
