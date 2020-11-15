import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  IdValue:number=1;
  UserNameValue:string='';
  EmailValue:string='';
  PasswordValue:string='';


  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

  CreateNewAdmin()
  {
    
    this.adminService.createAdmin(this.IdValue,this.UserNameValue,this.EmailValue,this.PasswordValue);
    // alert("Added Admin");
  }

}
