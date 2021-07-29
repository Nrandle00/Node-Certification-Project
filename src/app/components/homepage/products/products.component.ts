import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
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
  

  constructor(private homeDeps : HomeCategoriesService) { }

  ngOnInit(): void {
    
    this.homeDeps.getHomepageProducts().subscribe((response:Iproduct[] ) => {
      this.products = response;
    })
    
    this.homeDeps.getHomePageDepartments().subscribe((response:string[] ) => {
      this.departments = response;
    })    
  }
  ngAfterContentChecked():void{
    if (this.products && !this.productsDone){
      this.products.forEach(product => {
        product.image = "http://localhost:3000" + product.image
      });
      this.productsDone = true;
      
    }
    
    
  }

}
