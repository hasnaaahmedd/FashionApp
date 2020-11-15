import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  

  constructor(private authService:AuthenticationService,private router:Router) { }

  //initial values for testing
  adminProfileObject:Admin={_id:3,UserName:"xyz",Email:"xyc@yahoo.com",Password:"123"};
  

  ngOnInit(): void {
   this.adminProfileObject=this.authService.GetAdminObject();
   
  }

  createPage()
  {
    this.router.navigate(['admin/create']);
  }

  categoryControlPage()
  {
    this.router.navigate(['categorycontrol']);
  }

  createProductPage(){
    this.router.navigate(['product/create']);

  }

}
