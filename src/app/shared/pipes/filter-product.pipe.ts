import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/core/services/models/product.models';
@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(productsList: Product[], filterValue: string): Product[] {
    return productsList.filter(value => value.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
