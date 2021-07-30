import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service'
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'edureka-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;
  
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
     this.profileService.profileDetails().subscribe((response: any)=>{
      this.profile = response as any;
    })
  }

}
