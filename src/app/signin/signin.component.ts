import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Router} from '@angular/router'

import { User } from "../Services/Models/user";
import { UserService } from "../Services/user.service";
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	
	private user: User = new User(0,"","","","");
	private incorrectLogin: boolean = false;
	private signingIn: boolean = false;
	
	items: FirebaseListObservable<any[]>;

	constructor(private userService: UserService, private router: Router) {
		
	}

	ngOnInit() {
	}

	onSubmit(form)
	{
		this.signingIn = true;
		this.user.email = form.controls.email.value;
		this.user.password = form.controls.password.value;
		
		//debugger;
		this.userService.getUserByEmail(this.user)
				.subscribe(	(userRes) => {
							//console.log(userRes)
							if (userRes != null && this.user.password == userRes.password)
							{
								//this.router.navigateByUrl('home');
							}
							else
							{
								//this.router.navigateByUrl('signin');
								this.incorrectLogin = true;
							}
							this.signingIn = false;

				}
		);

			
			/*.then( (usr) => {
			if (usr.id > 0)
				
			else
				
		});*/

		
	}

}
