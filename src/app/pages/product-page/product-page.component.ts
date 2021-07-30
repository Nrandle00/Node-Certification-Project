import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/services/admin/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'edureka-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})


export class ProductPageComponent implements OnInit {

  product !: Iproduct;
  

  constructor(private service: ProductsService, private activatedRoute : ActivatedRoute, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.service.getProduct(params.id).subscribe((product:any)=>{
              this.product = product[0];
              this.product.image = "http://localhost:3000/" + this.product.image
              console.log(this.product)
          })
    })
  }

  //send a product to the list of products in cart service
  addToCart(product: Iproduct){
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/cart');
  }
  

}
