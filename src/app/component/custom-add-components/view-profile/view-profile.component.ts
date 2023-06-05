import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent {
constructor(private _router: Router){}
Go_Edit_Profile(){
  this._router.navigate(['/Profile/edit']);
}
}
