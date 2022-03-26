import { ProductService } from './../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/services/models/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public product?: Product;
  public productId?: number;
  public productsToSearch?: Product[];
  public newProduct?: Product;
  public editedProduct?: Product;
  public editedProductId?: number;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
     this.productId = +params["id"];
      this.productService.getProducts().subscribe((products) => {
        //console.log(products);
      this.productsToSearch = products;
      this.newProduct = this.productService.newProduct;
      this.editedProduct = this.productService.editedProduct;
      this.editedProductId = this.productService.editedProductId;

      this.productsToSearch! = [...this.productsToSearch!, this.newProduct!]

      if(this.editedProductId !== undefined) {
      let productToEdit = this.productsToSearch!.find((element) =>  element.id === this.editedProductId)
      productToEdit!.description = this.editedProduct!.description;
      productToEdit!.name = this.editedProduct!.name;
      productToEdit!.price = this.editedProduct!.price;
      productToEdit!.image = this.editedProduct!.image;
      productToEdit!.stars = this.editedProduct!.stars;
      productToEdit!.id = this.editedProduct!.id;

      }

      this.product = this.productsToSearch.find((element) => element.id === this.productId);


    });
  })
}

}
