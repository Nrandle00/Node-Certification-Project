import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'edureka-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  tempCart !: Iproduct[]
  sum: number = 0
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.tempCart = this.cartService.getCart();
  }

  

  getSum() {
    this.sum = 0
    for (let i of this.tempCart) {
      this.sum += i.price
    }
    return this.sum

  }

  //button Function
  placeOrder() {
    this.cartService.placeOrder();
  }
  removeItem(i: number) {
    this.cartService.deleteItem(i);
  }
  emptyCart() {
    this.cartService.clearCart();
  }
}
