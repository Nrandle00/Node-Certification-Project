import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http : HttpClient) { }

  profileDetails(){
    return this.http.get("http://localhost:8080/api/v1/users/whoami",{
      headers : {"Authorization" : window.localStorage.getItem("token") || ""}
    })
  }
}