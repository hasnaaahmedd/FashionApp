import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  IdValue:number=1;
  CategoryIdValue:number;
  ProductNameValue:string='';
  DetailsValue:string='';
  PriceValue:string='';
  constructor(private router:Router,private adminService:AdminService) { }

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

  CreateNewProduct()
  {
    this.adminService.createProduct(this.IdValue,this.CategoryIdValue,this.ProductNameValue,this.DetailsValue,this.PriceValue);

  }

  BackToProduct(){
    this.router.navigate(['product']);

  }
}
