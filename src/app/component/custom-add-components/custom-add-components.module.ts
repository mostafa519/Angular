import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "profile", component: ViewProfileComponent, title: "Ptofile"
  },
  {
    path: "edit", component: EditProfileComponent, title: "Edit Profile"
  }

]


@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomAddComponentsModule { }
