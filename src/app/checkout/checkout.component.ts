import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  productList: any = [];
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
  }
}


