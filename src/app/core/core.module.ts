import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})

export class CoreModule { }
