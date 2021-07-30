import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './forms/loginform/loginform.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RegistrationformComponent } from './forms/registrationform/registrationform.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DepartmentComponent } from './components/products/department/department.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AddNewProductComponent } from './pages/add-new-product/add-new-product.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path : "", component : HomepageComponent},
  {path: "admin/add-new-product", canActivate: [AdminGuard], component: AddNewProductComponent},
  { path : "login", component : LoginformComponent},
  { path : "register", component : RegistrationformComponent},
  { path : "department/:department", component: DepartmentComponent },
  { path : "department/:department/:filterBy", component: DepartmentComponent },
  { path : "products/:id", component: ProductPageComponent},
  { path : "cart", component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, CarouselModule]
})
export class AppRoutingModule { }
