import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Admin } from '../models/admin.model';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  //category
  categoryObjects:Category[];
  categoryObjectsUpdated= new Subject <Category[]>();

  //product
  productsObjects:Product[];
  productObjectsUpdated= new Subject <Product[]>();

  constructor(private http:HttpClient) { }
  
  createAdmin(IdValue:number,UserNameValue:string,EmailValue:string,PasswordValue:string){

    //creating admin object
 const adminObject:Admin = {_id:IdValue, UserName:UserNameValue, Email:EmailValue, Password:PasswordValue};

    //sending http request with admin object in the body
    this.http.post<{message:string}>('http://localhost:3030/admin/add',adminObject)
             .subscribe((data)=>{
              console.log(data.message);
             });
             
  }

  createCategory(IdValue:number,CategoryNameValue:string,DetailsValue:string){

    //creating category object
    const categoryObject:Category = {_id:IdValue,
       CategoryName:CategoryNameValue,
       Details:DetailsValue};

       //sending http request with category object in the body
       this.http.post<{message:string}>('http://localhost:3030/category/add',categoryObject)
             .subscribe((data)=>{
              console.log(data.message);
              
             });

  }

  DeleteCategory(id:number){

    //sending http request to delete specific category
    this.http.delete<{message:string, cats:Category[]}>('http://localhost:3030/category/delete/'+id)
             .subscribe((data)=>{
              console.log(data.message);
              this.categoryObjects=data.cats;
              this.categoryObjectsUpdated.next([...this.categoryObjects]);
             });

  }

  GetAllCategories(){

      //fetching all categories from database
       this.http.get<{message:string, cats:Category[]}>('http://localhost:3030/category/all')
             .subscribe((data)=>{
              console.log(data.cats);
              this.categoryObjects=data.cats;
              this.categoryObjectsUpdated.next([...this.categoryObjects]);
             });

             
  }

  GetCategoryUpdatedListener(){

    return this.categoryObjectsUpdated.asObservable();
  }

  createProduct(IdValue:number,
    CategoryIdValue:number,
    ProductNameValue:string,
    DetailsValue:string,
    PriceValue:string){

      //creating product object
    const productObject:Product = {_id:IdValue,
      CategoryId:CategoryIdValue,
      ProductName:ProductNameValue,
      Details:DetailsValue,
      Price:PriceValue};

      //sending http request with product object in the body
      this.http.post<{message:string}>('http://localhost:3030/product/add',productObject)
             .subscribe((data)=>{
              console.log(data.message);
              
             });

  }

  GetAllProducts(){

    //fetching all products from database
    this.http.get<{message:string, prods:Product[]}>('http://localhost:3030/product/all')
          .subscribe((data)=>{
           console.log(data.prods);
           this.productsObjects=data.prods;
           this.productObjectsUpdated.next([...this.productsObjects]);
          });

          
}

GetProductUpdatedListener(){

 return this.productObjectsUpdated.asObservable();
}

}
