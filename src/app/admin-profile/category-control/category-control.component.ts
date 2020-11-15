import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { AdminService } from 'src/app/services/admin.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-category-control',
  templateUrl: './category-control.component.html',
  styleUrls: ['./category-control.component.css']
})
export class CategoryControlComponent implements OnInit {

  constructor(private authService:AuthenticationService,
    private router:Router,
    private adminService:AdminService) { }

  categoryObjects:Category[]=[
    {_id:1,CategoryName:"Clothes",Details:"xyzzz"},
    {_id:2,CategoryName:"abcc",Details:"klm"}
  ]

  categoryObjectsSub:Subscription;

  ngOnInit(): void {
    this.adminService.GetAllCategories();
    this.categoryObjectsSub=this.adminService.GetCategoryUpdatedListener()
    .subscribe((categories:Category[])=>{
      this.categoryObjects=categories;
    })
  }

  createCategory(){

    this.router.navigate(['category/create']);

  }

  deleteCategory(id:number){
    this.adminService.DeleteCategory(id);
  }
}
