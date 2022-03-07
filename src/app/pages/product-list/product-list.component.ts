import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/services/models/product.models';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productsList: Product[] = [];
  public enableProductEdit: boolean = false;
  public emptyList: boolean = false;
  public filterValue:string = "";


  constructor(
    private productService:ProductService,
    //private activatedRoute: ActivatedRoute

     ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productService.getProducts().subscribe((products) => {
      console.log(products);
      this.productsList = products;
    })
  }

  public modifyProducts() {
    this.enableProductEdit = !this.enableProductEdit;
  }

  public deleteParentProduct(id:number) {
    console.log(id);
    //this.productsList.map(product => produ0ct.id !== id)
    this.productsList.forEach((value, index) => {
      if(value.id === id) this.productsList.splice(index, 1);
    });
    console.log(this.productsList);
    if (this.productsList.length === 0) {
      this.emptyList = true;
      alert("No products to show")
    }
   }

}
