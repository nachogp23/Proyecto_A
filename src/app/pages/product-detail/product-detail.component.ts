import { EditProductModule } from './../edit-product/edit-product.module';
import { Product } from 'src/app/core/services/models/product.models';
import { ProductService } from './../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { elementAt } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product?: Product;
  public productId?: number;
  public stars: number = 0;
  public productsToSearch?: Product[];
  public newProduct?: Product;
  public editedProduct?: Product;
  public editedProductId?: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      console.log(this.productId);
    });

    this.productService.getProducts().subscribe((products) => {
      //console.log(products);
      this.productsToSearch = products;
      this.newProduct = this.productService.newProduct;
      this.editedProduct = this.productService.editedProduct;
      this.editedProductId = this.productService.editedProductId;

      this.productsToSearch! = [...this.productsToSearch!, this.newProduct!];

      if (this.editedProductId !== undefined) {
        let productToEdit = this.productsToSearch!.find(
          (element) => element.id === this.editedProductId
        );
        productToEdit!.description = this.editedProduct!.description;
        productToEdit!.name = this.editedProduct!.name;
        productToEdit!.price = this.editedProduct!.price;
        productToEdit!.image = this.editedProduct!.image;
        productToEdit!.stars = this.editedProduct!.stars;
        productToEdit!.id = this.editedProduct!.id;
      }

      console.log(this.productsToSearch);

      this.product = this.productsToSearch.find(
        (element) => element.id === this.productId
      );

      const rating = this.product!.stars;
      this.stars = Math.round(rating);
      console.log(this.stars);
      // this.productsList.forEach((element) => {
      //   console.log(element.id)
      //   if(element.id === this.productId) {
      //    console.log(element.name);

      //   } else{
      //     console.log(`El ID del objeto es ${element.id}, no coincide con ${this.productId}`)
      //   }
    });
  }
}
