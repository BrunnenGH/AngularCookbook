import { NgModule } from '@angular/core';

import { CarService } from './car.service';
import { CountryService } from './country.service';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [CarService, CountryService, CustomerService, ProductService],
})
export class AsyncModule { }
