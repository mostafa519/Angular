import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Iproduct } from '../modulees/iproduct';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    }
  }

  addProduct(newProduct: Iproduct): Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.APIURL}/products`,JSON.stringify(newProduct),this.http);
  }
  updateProduct(updateproduct: Iproduct):Observable<Iproduct>{
    return this.httpClient.put<Iproduct>(`${environment.APIURL}/products/${updateproduct.id}`,JSON.stringify(updateproduct),this.http);
  }
  deleteProduct(deleteproduct: Iproduct):Observable<Iproduct>{
    return this.httpClient.delete<Iproduct>(`${environment.APIURL}/products/${deleteproduct.id}`,this.http);
  }

}
