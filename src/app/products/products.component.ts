import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

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
   delete(this.products)
     if (localStorage.getItem('token')){
       this.productService.delete(Product).subscribe(
         id => this.findProducts()
       )
     }else {
       alert('You need to login to delete')
     }
   }
 }
