import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { HomeCategoriesService } from 'src/app/services/home-categories.service';

@Component({
  selector: 'edureka-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  slides: string[] = ["https://i.picsum.photos/id/811/1000/600.jpg?hmac=vKCBG0n3SeQaB90YtymbYW1KYc_Ll0tiGGlwtSQhyUE",
    "https://i.picsum.photos/id/295/1000/600.jpg?hmac=_wt1JTb_P93-LPbj-qRnHFdnbxmc8Kx_68B3GNmpLLU",
    "https://i.picsum.photos/id/508/1000/600.jpg?hmac=JVbbrst8ELCVMeVEpsGJsl3k0J0vv8LaxZbMojdKhKw"];



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
