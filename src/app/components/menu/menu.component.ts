import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeCategoriesService } from 'src/app/services/home-categories.service';

@Component({
  selector: 'edureka-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedOption : string = "Departments";
  departments !: string[];
  constructor(private homeService : HomeCategoriesService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.homeService.getHomePageDepartments().subscribe((response: string[]) => {
      this.departments = response;
    })
  }
  

  select(s :string){
    this.router.navigateByUrl("department/" + this.selectedOption).then(() => {window.location.reload()});

  }
}
