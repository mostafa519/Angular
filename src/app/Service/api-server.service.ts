import { Observable, catchError, map, of, retry, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Iproduct } from '../modulees/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  constructor(private httpClient:HttpClient) { }
  getIdProduct(): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.APIURL}/products`);
  }
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/products`);
  }
  getPrdByID(prdID: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `${environment.APIURL}/products/${prdID}`
    );

  }
  searchByPrdName(mat: string): Observable<Iproduct[]> {

    return this.httpClient
      .get<Iproduct[]>(`${environment.APIURL}/products?Name=${mat}`)
      .pipe(
        retry(2),
        catchError((err) => {
          return throwError(() => {
            return new Error('Error occurred while searching');
          });
        })
      );
  }
  getCategoryID(mat: number): Observable<Iproduct[]> {

    return this.httpClient
      .get<Iproduct[]>(`${environment.APIURL}/products?CateoggryID=${mat}`)
      .pipe(
        retry(2),
        catchError((err) => {
          return throwError(() => {
            return new Error('Error occurred while searching');
          });
        })
      );
  }
}
