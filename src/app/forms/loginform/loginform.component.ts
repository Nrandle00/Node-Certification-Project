import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'; 

@Component({
  selector: 'edureka-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  loginModel = {
    email: "",
    password: ""
  }

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  login(loginForm : any){
    console.log(this.loginModel)
    this.user.login(this.loginModel)
  }

}
