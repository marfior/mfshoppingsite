import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from "../Services/Models/user";
import { UserService } from "../Services/user.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	
	private user: User = <User>{};
	private incorrectPassword: boolean = false;
	private incorrectUser: boolean = false;
	private signingIn: boolean = false;

	
	constructor(private userService: UserService, private router: Router) {
		
	}

	ngOnInit() {
	}

	onSubmit(form)
	{
		this.incorrectUser = this.incorrectPassword = false;
		this.signingIn = true;
		this.user.email = form.controls.email.value;
		this.user.password = form.controls.password.value;
		
		this.userService.getUserByEmail(this.user)
						.subscribe(	(userRes) => {
							if (userRes != null && this.user.password == userRes.password)		// successful login
							{
								this.router.navigateByUrl('home');
								this.userService.userLogged = userRes;
							}
							else if (userRes == null)											// user does not exist
							{
								this.incorrectUser = true;
							}
							else if (userRes != null && this.user.password != userRes.password)	// incorrect password
							{
								this.incorrectPassword = true;
							}
							this.signingIn = false;

				}
		);

		
	}

}
