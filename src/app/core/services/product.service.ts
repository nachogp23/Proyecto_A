import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product.models';
import { environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProducts():Observable<Product[]> {
    return this.httpClient.get(environment.baseApiUrl) as Observable<Product[]>
  }

  // public deleteProduct(id:string):Observable<Product> {
  //   return this.httpClient.delete

  // }
}
