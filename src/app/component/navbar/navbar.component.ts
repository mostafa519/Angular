import { Component } from '@angular/core';
import { UserAuthenService } from 'src/app/Service/user-authen.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userLogCheck:boolean;
constructor(private userAuthser:UserAuthenService){
  this.userLogCheck=this.userAuthser.userStatus;
  // console.log(this.userLogCheck);

}
  ngOnInit(): void {
    // this.userLogCheck=this.userAuthser.userStatus;
    // console.log(this.userLogCheck);

    this.userAuthser.userStatusChange().subscribe(status=>{
      this.userLogCheck=status;
      console.log(this.userLogCheck);




    })

  }
}
