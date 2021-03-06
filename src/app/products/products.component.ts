import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
 selector: 'app-products',
 templateUrl: './products.component.html',
 styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products = []

 constructor(private productService: ProductService) { }

 ngOnInit() {
   this.findProducts ()
 }

 findProducts(): void {
   this.productService.getProducts().subscribe(ProductOutput => {
    this.products = ProductOutput
   })
 }
}