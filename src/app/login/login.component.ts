import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup
  loginName: any

  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userDetails': new FormGroup({
        'userName': new FormControl(null),
        'password': new FormControl(null),
      }),
    })
  }

  onSubmit() {
    console.log(this.loginForm)
  }

  userNameHeader() {
    this._loginService.userLoginName.next(this.loginForm.value.userDetails.userName);
  }

}
