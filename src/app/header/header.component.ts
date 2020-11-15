import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../models/category.model';
import { AdminService } from '../services/admin.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryObjects:Category[]=[
    {_id:1,CategoryName:"Clothes",Details:"xyzzz"},
    {_id:2,CategoryName:"abcc",Details:"klm"}
  ]

  categoryObjectsSub:Subscription;

  constructor(public authService:AuthenticationService, public adminService:AdminService) { }


  ngOnInit(): void {

    this.adminService.GetAllCategories();
    this.categoryObjectsSub=this.adminService.GetCategoryUpdatedListener()
    .subscribe((categories:Category[])=>{
      this.categoryObjects=categories;
    })
    
  }

}
