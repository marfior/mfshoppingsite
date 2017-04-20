

export class Product {
	
	name: string;
	price: number;
	stock: number;
	description: string;
	
	constructor(name: string,price: number,	stock: number,	description: string) 
	{
		this.name = name;
		this.price = price;
		this.stock = stock;
		this.description = description;
	}
	/*
	constructor(jsonResponse: any) {
	this.id = jsonResponse.id;
	this.todotext= jsonResponse.todotext;
	}
	*/


}
