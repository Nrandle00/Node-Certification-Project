import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { HomeCategoriesService } from 'src/app/services/home-categories.service';

@Component({
  selector: 'edureka-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  products !: Iproduct[];
  productsDone: boolean = false;
  department !: string;
  filtered !: string | null;
  departments !: string[];
  low !: number | null;
  high !: number | null;

  url: string = this.router.url;
  selectedOption !: string;

  constructor(private homeDeps: HomeCategoriesService, private route: ActivatedRoute, private router: Router,private cartService: CartService) { }

  ngOnInit(): void {

    this.filtered = this.route.snapshot.paramMap.get("filterBy");
    this.selectedOption = this.filtered || "Empty";
    this.department = this.route.snapshot.paramMap.get("department") || "";
    if (this.filtered){
      var split = this.filtered.split("-");
      if (split.length >1){
        this.low = Number.parseInt(split[0]);
        this.high = Number.parseInt(split[1]);
      }
    }

    this.homeDeps.getDepartment(this.department).subscribe((response: Iproduct[]) => {
      this.products = response;
      this.products.forEach(product => {
        product.image = "http://localhost:3000" + product.image
      });
      if (this.low){
        this.low = this.low || 0;
        this.products = this.products.filter(item => item.price > (this.low || 0));
        this.products = this.products.filter(item => item.price < (this.high || 0));
      }
      
    })

    this.homeDeps.getHomePageDepartments().subscribe((response: string[]) => {
      this.departments = response;
    })
  }
  select(val: string) {
    if (this.filtered && val === "any") {
      this.router.navigateByUrl("department/" + this.department).then(() => {window.location.reload()});
    } else if (this.filtered) {
      this.router.navigateByUrl("department/" + this.department + "/" + this.selectedOption).then(() => {window.location.reload()});
    } else {
      this.router.navigateByUrl(this.url.concat("/" + this.selectedOption)).then(() => {window.location.reload()}); 
    }
  }
  addToCart(product: Iproduct){
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/cart');
  }
  redirect(product : Iproduct){
    this.router.navigateByUrl('/products/'+product._id);
  }

}
