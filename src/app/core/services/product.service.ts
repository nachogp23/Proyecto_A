import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product.models';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public newProduct?: Product;
  public editedProduct?: Product;
  public editedProductId?: number;

  constructor(private httpClient: HttpClient) { }

  public getProducts():Observable<Product[]> {
    return this.httpClient.get(`${environment.baseApiUrl}products`) as Observable<Product[]>
  }

  public createProduct(product: Product) {
    product.id = Number(product.id);
    product.stars = Number(product.stars);
    product.price = Number(product.price);
    this.newProduct = product;
  }

  public editProduct (id: number, product: Product ){
    console.log(id, product);
    // product.id = id;
    product.id = Number(product.id);
    product.stars = Number(product.stars);
    product.price = Number(product.price);
    this.editedProduct = product;
    this.editedProduct.id = id;
    this.editedProductId = id;
  }

  // public getProductsById(id: string):Observable<Product> {
  //   return this.httpClient.get(`${environment.baseApiUrl}products/${id}`) as Observable<Product>
  // }

  // public deleteProduct(id:string):Observable<Product> {
  //   return this.httpClient.delete
  // public deleteProduct(id: string): Observable<Product> {
  //   return this.httpClient.delete(`${environment.baseApiUrl}products/${id}`) as Observable<Product>;
  // }
  // }
}
