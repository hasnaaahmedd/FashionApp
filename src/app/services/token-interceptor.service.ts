import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService:AuthenticationService) { }


  intercept(request:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

    if(this.authService.GetUserToken()){
      
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization:`Bearer ${this.authService.GetUserToken()}`
        }
  });

    return next.handle(clonedRequest);
    }
    else
    return next.handle(request);


  }

  
  }

