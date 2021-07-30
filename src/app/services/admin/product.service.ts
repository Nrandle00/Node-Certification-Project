import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(private http: HttpClient) {
    
  }


  addNewProduct(product: any, image: any) {
    const formdata = new FormData();
    formdata.append("name", product.name)
    formdata.append("department", product.department)
    formdata.append("price", product.price)
    formdata.append("discount", product.discount)
    formdata.append("image", image, image.name)
    formdata.append("description", product.description)

    return this.http.post("http://localhost:3000/api/v1/admin/products", formdata)
  }

  getProduct(id: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`http://localhost:3000/api/v1/products/${id}`);
  }

}
