import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  IdValue:number=1;
  CategoryNameValue:string='';
  DetailsValue:string='';

  constructor(public adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  CreateNewCategory(){

    this.adminService.createCategory(this.IdValue,this.CategoryNameValue,this.DetailsValue);
  }

  BackToCategory(){

    this.router.navigate(['/categorycontrol']);


  }

}
