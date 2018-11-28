import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from './models/product';
//import { MessageService } from './message.service'

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
  constructor(
private http: HttpClient) {}
  //private messageService: MessageService) { }


  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
    // .pipe(
    //   tap(_ => this.log('got the products')),
    //   catchError(this.handleError('getProducts', []))
    // )
}



}

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
//   private handleError<T> (operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {

     
//       console.error(error); 

      
//       this.log(`${operation} failed: ${error.message}`);

      
//       return of(result as T);
//     };
//   }

  
//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }
// }