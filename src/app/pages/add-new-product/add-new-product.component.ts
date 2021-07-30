import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/services/admin/product.service';

@Component({
  selector: 'edureka-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

    fileToBeUploaded = null;

    addNewProduct = new FormGroup({
        name : new FormControl("", []),
        department: new FormControl("", []),
        price: new FormControl("", []),
        discount: new FormControl("", []),
        image : new FormControl("", []),
        description : new FormControl("", [])
    })

  constructor(private products : ProductsService) { }

  ngOnInit(): void {
      
  }

  addNewProductSubmit(){
      console.log(this.addNewProduct);
      this.products.addNewProduct(this.addNewProduct.value, this.fileToBeUploaded).subscribe((response)=>{
          console.log(response);
      })
  }

  selectImage(event : any)
    {
        this.fileToBeUploaded = event.target.files[0]
    }

}
