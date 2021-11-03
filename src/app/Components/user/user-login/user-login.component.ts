import { UserAuthService } from './../../../Services/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private user:UserAuthService) { }

  login()
  {
    this.user.login("email@email","123456")
  }
  logout(){
    this.user.logout();
  }
  ngOnInit(): void {
  }

}
