

export class User {
	
	id: number;
	email: string;
	name: string;
	surname: string;
	password: string;

	/*
	constructor() {
	}
	*/
	
	constructor(id: number,email: string,name: string,surname: string,password: string) 
	{
		this.id = id;
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
