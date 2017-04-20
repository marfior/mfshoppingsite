

export class User {
	
	email: string;
	name: string;
	surname: string;
	password: string;

	/*
	constructor() {
	}
	*/
	
	constructor(email: string,name: string,surname: string,password: string) 
	{
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

	public doSomething() {

		console.log("testing");


	}
}
