import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edureka-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedOption : string = "Departments";
  options = [{ id: 1, title: 'title 1' }, { id: 2, title: 'title 2' }];
  constructor() { }

  ngOnInit(): void {
    this.selectedOption = "123"
  }
  ngAfterContentInit():void{
    this.selectedOption = "123"
  }

  select(s :string){
    console.log(this.selectedOption)

  }
}
