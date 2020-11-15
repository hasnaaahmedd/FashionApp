import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CreateAdminComponent } from './admin-profile/create-admin/create-admin.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AdminService } from './services/admin.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CategoryControlComponent } from './admin-profile/category-control/category-control.component';
import { CreateCategoryComponent } from './admin-profile/create-category/create-category.component';
import { CreateProductComponent } from './admin-profile/create-product/create-product.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainSectionComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AdminProfileComponent,
    CreateAdminComponent,
    CategoryControlComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,AuthenticationGuard,AdminService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
