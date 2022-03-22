import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginName: any;

  constructor(private _loginService: LoginService) {
  }

  ngOnInit(): void {
    this._loginService.userLoginName.subscribe((loginUserName: any) => {
      this.loginName = loginUserName;
    })
  }

  isAdminLogin: boolean = true;

}
