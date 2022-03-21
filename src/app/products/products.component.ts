import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any = [];
  constructor() { }

  ngOnInit(): void {
    const productObj1: any = {
      "productName": "Product 1",
      "productPrice": "30",
      "productImg": "./../assets/images/IMG-20190525-WA0001.jpg",
    };
    const productObj2: any = {
      "productName": "Product 2",
      "productPrice": "30",
      "productImg": "./../assets/images/IMG-20190525-WA0002.jpg",
    };
    const productObj3: any = {
      "productName": "Product 3",
      "productPrice": "30",
      "productImg": "./../assets/images/IMG-20190525-WA0004.jpg",
    };
    const productObj4: any = {
      "productName": "Product 4",
      "productPrice": "350",
      "productImg": "./../assets/images/IMG-20190525-WA0005.jpg",
    };
    const productObj5: any = {
      "productName": "Product 5",
      "productPrice": "300",
      "productImg": "./../assets/images/IMG-20190525-WA0006.jpg",
    };
    const productObj6: any = {
      "productName": "Product 6",
      "productPrice": "400",
      "productImg": "./../assets/images/IMG-20190525-WA0007.jpg",
    };
    this.productList.push(productObj1);
    this.productList.push(productObj2);
    this.productList.push(productObj3);
    this.productList.push(productObj4);
    this.productList.push(productObj5);
    this.productList.push(productObj6);
  }

}
