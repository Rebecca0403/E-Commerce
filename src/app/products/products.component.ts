import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private product_service: ProductsService) {}
  products: ProductInterface[] = [];
  ngOnInit() {
    console.log('product component');

    this.product_service.getProducts().subscribe((data) => console.log(data));
    this.product_service
      .getProducts()
      .subscribe((test) => (this.products = test));
  }
}
