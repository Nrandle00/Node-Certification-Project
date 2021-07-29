import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { HomeCategoriesService } from 'src/app/services/home-categories.service';

@Component({
  selector: 'edureka-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private homeDeps : HomeCategoriesService) { }

  bannerProducts !: Iproduct[];
  bannerDone: boolean = false;

  ngOnInit(): void {
    this.homeDeps.getHomepageBanner().subscribe((response:Iproduct[] ) => {
      this.bannerProducts = response;
    })
  }
  ngAfterContentChecked():void{
    if (this.bannerProducts && !this.bannerDone){
      this.bannerProducts.forEach(product => {
        product.image = "http://localhost:3000" + product.image
      });
      console.log(this.bannerProducts)
      this.bannerDone = true;
    }
    
  }

}
