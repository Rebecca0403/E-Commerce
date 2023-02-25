import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductInterface[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
  }
  getProductById(id: number) {
    return this.http.get<ProductInterface>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
}
