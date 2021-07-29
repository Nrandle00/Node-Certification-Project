import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './forms/loginform/loginform.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationformComponent } from './forms/registrationform/registrationform.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  { path : "", component : HomepageComponent},
  { path : "login", component : LoginformComponent},
  { path : "register", component : RegistrationformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CarouselModule]
})
export class AppRoutingModule { }
