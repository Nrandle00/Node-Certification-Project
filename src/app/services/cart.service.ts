import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Iproduct[] = [];
  user : any;

  constructor(private http: HttpClient) { }

  addToCart(product: Iproduct){
    this.cart.push(product)
  }

  getCart() : Iproduct[]{
    return this.cart;
  }
  //add http post to place order
  placeOrder(){
    this.http.get("http://localhost:3000/api/v1/whoami", { headers: {"Authorization": window.localStorage.getItem("token") || ""}}).subscribe((response:any) => {
      this.user = response;
    })
    const formData = new FormData();
    formData.append("user", this.user);
    formData.append("cart", JSON.stringify(this.cart));

    this.http.post("http://localhost:3000/api/v1/order", formData);
  }
}


