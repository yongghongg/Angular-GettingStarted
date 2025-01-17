import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getProductById(id: Number): Observable<IProduct|undefined> {
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
      // filter(data => data.Id === id)
    )
  }
  private handleError(err: HttpErrorResponse) {
    let errorMsg = `Error code: ${err.status}, error message is: ${err.message}`;
    console.log(errorMsg);
    return throwError(errorMsg);
  }
}
