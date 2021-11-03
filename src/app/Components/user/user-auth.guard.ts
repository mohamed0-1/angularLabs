import { UserAuthService } from './../../Services/user-auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private userauthser:UserAuthService,
              private router:Router){}
  canActivate(
     route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userauthser.islogged())
      {
        return true;
      }
      else{
        alert("You Must Login First!!")
        this.router.navigate(['/user/login']);
        return false
      }
    

    }
  
   
}
