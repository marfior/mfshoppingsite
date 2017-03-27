import { Injectable } from '@angular/core';
import { User } from "./user";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	constructor(private httpServ: Http) 
	{ 
	}

  /*
	public addUser(user: User)
	{
		this.httpServ.post("http://localhost:3000/users",
		{
			id: user.id,
			email: user.email,
			name: user.name,
			surname: user.surname,
			password: user.password
		},{}).subscribe();

	}
	  
	

	  
	public getAll()
	{  // get data using a restful API
		return  this.httpServ.get("http://localhost:3000/users")
					  .map(responseObj => responseObj.json()
						  //.map(jsonToDo => new ToDo(jsonToDo) )
					  )
	}
	*/
	
	public getUser(id: number)
	{
		return this.httpServ.get("http://localhost:3000/users/" + id).subscribe();
	}
}
