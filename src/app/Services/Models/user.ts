

export class User {
	
	key: string;
	email: string;
	name: string;
	surname: string;
	password: string;

	/*
	constructor() {
	}
	*/
	
	constructor(key: string,email: string,name: string,surname: string,password: string) 
	{
		this.key = key;
		this.email = email;
		this.name = name;
		this.surname = surname;
		this.password = password;
	}
	/*
	constructor(jsonResponse: any) {
	this.id = jsonResponse.id;
	this.todotext= jsonResponse.todotext;
	}
	*/

	/*public fillUser(userObj) 
	{
		this.key = userObj.$key;
		this.email = userObj.email;
		this.name = userObj.name;
		this.surname = userObj.surname;
		this.password = userObj.password;
	}*/
}
