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
  
	private user: User = new User("","","","");
	private registering: boolean = false;
	private emailAlreadyTaken: boolean = false;
	

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
		
		// if email already exists do not and show error
		this.userService.getUserByEmail(this.user)
					.subscribe(	(userRes) => {
								debugger;
								if (userRes != null && this.user.email == userRes.email)
								{
									this.emailAlreadyTaken = true;
									this.registering = false;
								}
								else
								{
									this.emailAlreadyTaken = false;
									this.userService.addUser(this.user);
								}
					});


		//this.router.navigateByUrl('signin');


	}
}
