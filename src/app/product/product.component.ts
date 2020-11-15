import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../models/product.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //initial values for testing
  productObjects:Product[]=[
    {_id:1,CategoryId:1,ProductName:"Clothes",Details:"xyzzz",Price:"10$"}
  ]

  productObjectsSub:Subscription;
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.GetAllProducts();
    this.productObjectsSub=this.adminService.GetProductUpdatedListener()
    .subscribe((products:Product[])=>{
      this.productObjects=products;
    })
  }

}
