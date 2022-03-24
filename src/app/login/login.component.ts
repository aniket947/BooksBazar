import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup
  loginName: any
  isLoginOpen: boolean = false

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userDetails': new FormGroup({
        'userName': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required),
      }),
    })
  }

  onSubmit() {
    console.log(this.loginForm)
  }

  login() {
    this._loginService.userLoginName.next(this.loginForm.value.userDetails.userName);
    this.isLoginOpen = false;
  }

}
