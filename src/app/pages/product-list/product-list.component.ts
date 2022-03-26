import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/services/models/product.models';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, AfterViewInit {
  //@Input() public productCreated!: Product;

  public productsList: Product[] = [];
  public enableProductEdit: boolean = false;
  public emptyList: boolean = false;
  public filterValue: string = '';
  public newProduct?: Product;
  public editedProduct?: Product;
  public editedProductId?: number;
  //public update:boolean = true;

  constructor(
    private productService: ProductService //private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductsAPI();
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    //this.updateProductList();
  }

  public getProductsAPI() {
    this.productService.getProducts().subscribe((products) => {
      //console.log(products);
      this.productsList = products;
    });
  }


  public updateProductList = setTimeout(() => {
    this.newProduct = this.productService.newProduct;
    this.editedProduct = this.productService.editedProduct;
    this.editedProductId = this.productService.editedProductId;

    if (this.newProduct !== undefined) {
      console.log(this.newProduct);
      this.productsList = [...this.productsList, this.newProduct!];
      //this.productsList2.push(this.newProduct!);
      console.log(this.productsList);
    } else {
      console.log('No new products to show');
    }

    if(this.editedProduct !== undefined) {
      console.log(this.editedProduct, this.productService.editedProductId)
      let productToEdit = this.productsList.find((element) =>  element.id === this.editedProductId)
      console.log(productToEdit);
      productToEdit!.description = this.editedProduct.description;
      productToEdit!.name = this.editedProduct.name;
      productToEdit!.price = this.editedProduct.price;
      productToEdit!.image = this.editedProduct.image;
      productToEdit!.stars = this.editedProduct.stars;
      productToEdit!.id = this.editedProduct.id;

      console.log(productToEdit);
      console.log(this.productsList);
    }
  }, 500);

  public getProductsArray() {
    return this.productsList;
  }

  public modifyProducts() {
    this.enableProductEdit = !this.enableProductEdit;
  }

  public deleteParentProduct(id: number) {
    console.log(id);
    //this.productsList.map(product => produ0ct.id !== id)
    this.productsList.forEach((value, index) => {
      if (value.id === id) this.productsList.splice(index, 1);
    });
    //return this.productsList;
    console.log(this.productsList);
    if (this.productsList.length === 0) {
      this.emptyList = true;
      alert('No products to show');
    }

    return this.getProductsArray();
  }
}
