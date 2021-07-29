import { Component, OnInit } from '@angular/core';
import { HomeCategoriesService } from 'src/app/services/home-categories.service';

@Component({
  selector: 'edureka-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private homeDeps: HomeCategoriesService) { }

  departments !: string[];

  shuffleArray(array:string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  ngOnInit(): void {
    this.homeDeps.getHomePageDepartments().subscribe((response: string[]) => {
      this.departments = this.shuffleArray(response).slice(0,3);
    })
  }
}
