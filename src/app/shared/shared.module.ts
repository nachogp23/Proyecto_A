import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { FormComponent } from './components/form/form.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    FormComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ProductComponent,
    FormComponent,
    FilterProductPipe
  ]
})
export class SharedModule { }
