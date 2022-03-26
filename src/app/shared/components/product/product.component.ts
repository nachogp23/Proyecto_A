//import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/services/models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product!: Product;
  @Input() public enableProductEdit: boolean = false;
  @Output() public onDeleteProduct = new EventEmitter<number>();



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public deleteProduct() {
    console.log("click")
    if(this.product) {
      console.log("click_2")
      this.onDeleteProduct.emit(this.product.id);
    }
  }

  public editProduct() {
    this.router.navigate(['/edit-product', this.product?.id]);
  }

}
