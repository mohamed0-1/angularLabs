import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  private isloggedin:Boolean=false;
  login(email:string,password:string){
    if(email.length>3 && password.length>3)
    {
      let fakeToken="Any Token";
      localStorage.setItem("userToken",fakeToken);
      this.isloggedin=true;
      
    }
  }
  logout(){
    localStorage.removeItem("userToken");
    this.isloggedin=false;
   
  }

  islogged():Boolean{
    return this.isloggedin;
  }
}
