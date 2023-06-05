import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
isLoggedB:BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedB=new BehaviorSubject<boolean>(this.userStatus);
   }
   userToken:string = "";
logIn(userEmail:string,userPass:string){
   this.userToken =userEmail;
  localStorage.setItem(userEmail,userPass);
  this.isLoggedB.next(true);
}

logOut(userEmail:string){
  localStorage.removeItem(userEmail);
  this.isLoggedB.next(false);
}
get userStatus():boolean{
  return (localStorage.getItem(this.userToken))?true:false ;
}

userStatusChange():Observable<boolean>{
  return this.isLoggedB.asObservable();
}
}
