
import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin.model';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthenticationService) { }

 UserNameValue:string='admin';
 PasswordValue:string= '';

 adminObject:Admin ={_id:null, UserName:this.UserNameValue, Email:null, Password:this.PasswordValue}

  ngOnInit(): void {
    
  }

  login(){
    
    console.log("login angular!");
    console.log(this.UserNameValue);
    console.log(this.PasswordValue);

    this.authService.SendloginRequest(this.UserNameValue,this.PasswordValue);


  }

}
