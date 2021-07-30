import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { ProductsService } from 'src/app/services/admin/product.service';
import { CartService } from 'src/app/services/cart.service';
import { HomeCategoriesService } from 'src/app/services/home-categories.service';

@Component({
  selector: 'edureka-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  products !: Iproduct[];
  productsDone: boolean = false;


  departments !: string[];


  constructor(private homeDeps: HomeCategoriesService,private service: ProductsService, private activatedRoute : ActivatedRoute, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {

    this.homeDeps.getHomepageProducts().subscribe((response: Iproduct[]) => {
      this.products = response;
      this.products.forEach(product => {
        product.image = "http://localhost:3000" + product.image
      });
    })

    this.homeDeps.getHomePageDepartments().subscribe((response: string[]) => {
      this.departments = response;
    })
  }
  addToCart(product: Iproduct){
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/cart');
  }
  redirect(product : Iproduct){
    this.router.navigateByUrl('/products/'+product._id);
  }

}
