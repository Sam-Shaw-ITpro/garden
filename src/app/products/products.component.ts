import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public _products = {}

  ngOnInit() {
  }

  @Input()
  set product(product: any){
    this._products = (product)
  }
  get product() : any {
    return this._products
  }
}