import { CreateEditProductComponent } from './../../../pages/create-edit-product/create-edit-product.component';
import { Router } from '@angular/router';
import { ProductService } from './../../../core/services/product.service';
import { Product } from './../../../core/services/models/product.models';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public product?: Product;
  //@Input() public productList?: Product[];

  public createProductForm?: FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      name: new FormControl(this.product?.name || '', Validators.required),
      price: new FormControl(this.product?.price || '', [
        Validators.required,
        Validators.maxLength(5),
      ]),
      description: new FormControl(this.product?.description || ''),
      stars: new FormControl(this.product?.stars || ''),
      image: new FormControl(this.product?.image || '', Validators.required),
      id: new FormControl(this.product?.id || ''),
    });

  }

  public saveProduct(event: Event) {
    event.preventDefault();
    if(this.createProductForm?.valid) {

      console.log('formulario correcto');
      console.log(this.createProductForm.value);

      if (this.product?.id) {
        this.editProduct();
      } else {
         this.createProduct();
      }

      //productRequest.subscribe(() => {});

      this.createProductForm.reset();

    }
  }

  public createProduct() {
    //let newProduct: Product = this.createProductForm?.value
    this.productService.createProduct(this.createProductForm?.value);
    this.router.navigate(["/product-list"], );
  }

  public editProduct() {
    this.productService.editProduct(this.product?.id!, this.createProductForm?.value);
    this.router.navigate(["/product-list"], );
  }

}
