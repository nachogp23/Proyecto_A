import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEditProductRoutingModule } from './create-edit-product-routing.module';
import { CreateEditProductComponent } from './create-edit-product.component';


@NgModule({
  declarations: [
    CreateEditProductComponent
  ],
  imports: [
    CommonModule,
    CreateEditProductRoutingModule
  ]
})
export class CreateEditProductModule { }
