import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './forms/loginform/loginform.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationformComponent } from './forms/registrationform/registrationform.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductsComponent } from './components/homepage/products/products.component';
import { DepartmentsComponent } from './components/homepage/departments/departments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    HomepageComponent,
    RegistrationformComponent,
    MenuComponent,
    CarouselComponent,
    ProductsComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[CarouselModule]
})
export class AppModule { }
