import { Injectable } from '@angular/core';
import { User } from "./Models/user";
import 'rxjs/add/operator/map';

import { AngfirebaseService } from '../Services/angfirebase.service';

@Injectable()
export class UserService {

	public userLogged: User = <User>{};
	
	constructor(private afs: AngfirebaseService) { 
		
	}

	public listUsers(query: Object) {
		return this.afs.list('/users',query);
	}

	public getUserByEmail(user: User)
	{
			  //debugger;
		return this.listUsers(this.afs.getQueryByChild('email',user.email)).map( 
																				(arrUsers) => <User>arrUsers[0] 
																				);
	}

	
	public addUser(user: User)
	{
		this.listUsers(undefined).push(user);
		//this.afs.af.database.list("/users").push(user);
	}
}
