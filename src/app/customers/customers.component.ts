import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList: any = [];
  constructor() { }

  ngOnInit(): void {
    const customerObj1: any = {
      "custReview": "This book was pretty helpful in giving me ideas to write in the SAT.However, the length of the examples are not consistent.Some are detailed while others are rather short",
      "custName": "Anup Mangalkar",
      "custImg": "./../assets/images/Photo.jpeg",
    };
    const customerObj2: any = {
      "custReview": "This book was pretty helpful in giving me ideas to write in the SAT.However, the length of the examples are not consistent.Some are detailed while others are rather short",
      "custName": "Ankush Manjare",
      "custImg": "./../assets/images/Photo.jpeg",

    };
    const customerObj3: any = {
      "custReview": "This book was pretty helpful in giving me ideas to write in the SAT.However, the length of the examples are not consistent.Some are detailed while others are rather short",
      "custName": "Ashish Manjare",
      "custImg": "./../assets/images/Photo.jpeg",
    };

    this.customerList.push(customerObj1);
    this.customerList.push(customerObj2);
    this.customerList.push(customerObj3);

  }

}
