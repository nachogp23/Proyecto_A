import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
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
    CreateEditProductRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class CreateEditProductModule { }
