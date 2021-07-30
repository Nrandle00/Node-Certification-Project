import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class HomeCategoriesService {

  constructor(private http: HttpClient, private router: Router) { }

  getHomePageDepartments() :Observable<string[]> {
    return this.http.get<string[]>("http://localhost:3000/api/v1/products/homepage/departments")
  }
  getHomepageProducts() : Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>("http://localhost:3000/api/v1/products/homepage/products")
  }
  getDepartment(department : string) : Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>("http://localhost:3000/api/v1/products/department/".concat(department))
  }
  getHomepageBanner() : Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>("http://localhost:3000/api/v1/products/homepage/banner")
  }

}
