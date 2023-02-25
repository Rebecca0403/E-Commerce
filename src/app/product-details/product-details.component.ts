import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private activated_route:ActivatedRoute,private product_service:ProductsService){ }
  id:number=1;
  product!:ProductInterface
  ngOnInit(){ 
    this.id= +this.activated_route.snapshot.paramMap.get("id")!
    console.log(this.id)
    this.product_service.getProductById(this.id).subscribe(data=>this.product=data);

  }

}
