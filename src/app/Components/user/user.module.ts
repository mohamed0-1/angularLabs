import { UserAuthGuard } from './user-auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserLoginComponent } from './user-login/user-login.component';

 const routes:Routes=[
   {path:'profile', component:UserProfileComponent,canActivate:[UserAuthGuard]},
   {path:'login', component:UserLoginComponent},
   {path:'',redirectTo:'/user/profile',pathMatch:"full"},
 ];

@NgModule({
  declarations: [
    UserProfileComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
