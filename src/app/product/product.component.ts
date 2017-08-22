import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	private products: Array<Product>; //存储商品数据

	constructor() { }
		// 初始化数组
		ngOnInit() {
			this.products = [
				new Product(1,"第一个商品",9.90,2,"这是第一个商品，我是第一个商品",["电子产品","苹果"]),
				new Product(2,"第二个商品",9.90,4,"这是第二个商品，我是第二个商品",["书记","儿童"]),
				new Product(3,"第三个商品",9.90,5,"这是第三个商品，我是第三个商品",["电子产品","苹果"]),
				new Product(4,"第四个商品",9.90,1,"这是第四个商品，我是第四个商品",["电子产品","苹果"]),
				new Product(5,"第五个商品",9.90,5,"这是第五个商品，我是第五个商品",["水果","苹果"]),
				new Product(6,"第六个商品",9.90,3,"这是第六个商品，我是第六个商品",["电子产品","苹果"]),
				new Product(7,"第七个商品",1.90,2,"这是第六个商品，我是第六个商品",["电子产品","苹果"])
			];
	}
}

// 定义一个产品类
export class Product{
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public categories:Array<string>
	){

	}
}
