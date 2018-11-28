import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
  private deleteUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product/:id'

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.productUrl);
  };

  // deleteProducts(): Observable<Product[]> {
  //   const id = typeof product === 'number'
  // }
  delete(id)
  {
    let deleteUrl=`${this.productUrl}//${id}`
    return this._http.delete(deleteUrl)
}
};
