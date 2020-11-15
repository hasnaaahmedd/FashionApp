import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CategoryControlComponent } from './admin-profile/category-control/category-control.component';
import { CreateAdminComponent } from './admin-profile/create-admin/create-admin.component';
import { CreateCategoryComponent } from './admin-profile/create-category/create-category.component';
import { CreateProductComponent } from './admin-profile/create-product/create-product.component';
import { AppComponent } from './app.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { LoginComponent } from './login/login.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component: MainSectionComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'product',
    component: ProductComponent
  },
  {
    path:'admin/profile',
    component: AdminProfileComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'admin/create',
    component: CreateAdminComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'categorycontrol',
    component: CategoryControlComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'category/create',
    component: CreateCategoryComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'product/create',
    component: CreateProductComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
