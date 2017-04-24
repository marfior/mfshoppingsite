

export class Product {
	
	key: string;
	name: string;
	price: number;
	category: string;
	description: string;
	imageUrl: string
	
	constructor(key: string, name: string,price: number,	category: string,	description: string) 
	{
		this.key = key;
		this.name = name;
		this.price = price;
		this.category = category;
		this.description = description;
	}
	/*
	constructor(jsonResponse: any) {
	this.id = jsonResponse.id;
	this.todotext= jsonResponse.todotext;
	}
	*/


}
