import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggeedIn= false;
  user = {
    name : "abc",
    isAdmin : true
}
  constructor(private http: HttpClient, private router: Router) { }

  login(userinfo : any){
     this.http.post("http://localhost:3000/api/v1/users/login", {
          email : userinfo.email,
      password : userinfo.password
    }).subscribe((response : any)=>{
      console.log(response);
      const accessToken = response.accessToken;
      window.localStorage.setItem("token",accessToken);
      this.isLoggeedIn=true;
      this.router.navigateByUrl("/");
    })
  }
}
