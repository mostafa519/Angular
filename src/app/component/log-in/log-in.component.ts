import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Service/user-authen.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  userStat:boolean=false;
constructor(private userAuth:UserAuthenService){}



  ngOnInit(): void {
    this.userStat=this.userAuth.userStatus;

  }
logInFun(n:string ,x:string){
  console.log(n);

  this.userAuth.logIn(n,x);
  this.userStat=this.userAuth.userStatus;
}
logOutfun(s:string){
  this.userAuth.logOut(s);
  this.userStat=this.userAuth.userStatus;
}


inputvalue: string = "";
set inputValue(value: string) {
  this.inputvalue = value;
}
get inputValue(): string {
  return this.inputvalue;
}
inputvalue2: string = "";
set inputValue2(value: string) {
  this.inputvalue2 = value;
}
get inputValue2(): string {
  return this.inputvalue;
}

}
