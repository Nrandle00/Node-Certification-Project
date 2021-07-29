import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'edureka-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  registrationModel = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  }

  constructor(private registration: RegistrationService) { }

  ngOnInit(): void {
  }
  
  register(registrationForm : any){
    console.log(this.registrationModel);
    this.registration.register(this.registrationModel);
  }
}
