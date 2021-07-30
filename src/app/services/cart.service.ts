import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Iproduct[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Iproduct){
    this.cart.push(product)
  }

  getCart() : Iproduct[]{
    return this.cart;
  }
  //add http post to place order
}


