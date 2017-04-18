import { Injectable } from '@angular/core';
import { User } from "./Models/user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

import { FirebaseListObservable } from 'angularfire2';

import { AngfirebaseService } from '../Services/angfirebase.service';

@Injectable()
export class UserService {
	
	constructor(private httpServ: Http,private afs: AngfirebaseService) { 
		
	}

	public getUserByEmail(user: User)
	{
			  //debugger;
		return this.afs.af.database.list('/users',{ 
									query: {
										orderByChild: 'email',
										equalTo: user.email, 
									}
								}).map( 
										(arrUsers) => <User>arrUsers[0] 
										);

	}

	
	public addUser(user: User)
	{
		this.afs.af.database.list("/users").push(user);
	}
}
