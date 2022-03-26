//import { HomeModule } from './src/app/pages/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",

    loadChildren: () => import("src/app/pages/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "product-list",
    loadChildren: () => import("src/app/pages/product-list/product-list.module").then(m => m.ProductListModule)
  },

  {
    path: "create-and-edit",
    loadChildren: () => import("src/app/pages/create-edit-product/create-edit-product.module").then(m => m.CreateEditProductModule)
  },

  {
    path: "edit-product/:id",
    loadChildren: () => import("src/app/pages/edit-product/edit-product.module").then(m => m.EditProductModule)
  },

  {
    path: "product-list/:id",
    loadChildren: () => import("src/app/pages/product-detail/product-detail.module").then(m => m.ProductDetailModule)
  },

  {
    path: "**",
    loadChildren: () => import("src/app/pages/error-page/error-page.module").then(m => m.ErrorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
