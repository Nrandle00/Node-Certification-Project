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
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.tempCart = this.cartService.getCart();
  }

  sum : number = 0
  
  getSum(){
  
      for(let i of this.tempCart){
        this.sum += i.price
      }
      return this.sum
       
    }

  removeItem(i:number){
    delete this.cartService.cart[i];
    window.location.reload();
  }

}
