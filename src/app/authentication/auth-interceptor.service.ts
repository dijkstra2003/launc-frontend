import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (localStorage.getItem('JwtToken')) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer '.concat(localStorage.getItem('JwtToken'))
        }
      });
    }
    return next.handle(req);
  }
}
