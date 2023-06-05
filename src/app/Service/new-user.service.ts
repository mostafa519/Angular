import { Iproduct } from 'src/app/modulees/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Iuser } from '../modulees/iuser';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  http = {};
  constructor(private httpclient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  signUpUser(newUser: Iuser): Observable<Iuser> {
    return this.httpclient.post<Iuser>(`${environment.APIURL}/Iuser`, JSON.stringify(newUser), this.http);
  }
  // signUpIproduct(newProduct: Iproduct): Observable<Iproduct> {
  //   return this.httpclient.post<Iproduct>(`${environment.APIURL}/Products`, JSON.stringify(newProduct), this.http);
  // }

}
