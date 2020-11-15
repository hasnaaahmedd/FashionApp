import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  adminProfileObj:Admin;

  
 constructor(private http:HttpClient,
   private router:Router,
   private route:ActivatedRoute) { }


SendloginRequest(username:string, password:string)
{
 const adminObject:Admin = {_id:1, UserName:username, Email:null, Password:password};
 
 //sending login request with entered values
 this.http.post<{admin:Admin, usertoken:string}>('http://localhost:3030/login',adminObject)
          .subscribe((data)=>{

            if(data.admin==null)
            {

             this.router.navigate(['/'],{relativeTo:this.route});

            }
             console.log(data);
             console.log(data.usertoken);
             
            //store the token generated in the server in the local storage (client-side)
             localStorage.setItem("token",data.usertoken);
             this.adminProfileObj=data.admin;
             this.router.navigate(['/'],{relativeTo:this.route});

           });
}

LoggedIn(){
  //checking if the token is present or not
  return !!localStorage.getItem("token");
}

GetUserToken(){
  //return the token stored in local storage
  return localStorage.getItem("token");
}

LogoutUser(){
  //removing token when logging out
  localStorage.removeItem("token");
  this.router.navigate(['/'],{relativeTo:this.route});

}
GetAdminObject(){

 return this.adminProfileObj;
}

}
