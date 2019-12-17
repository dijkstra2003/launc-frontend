import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  isLoggedInSource = new BehaviorSubject<boolean>(this.isLoggedIn);
  isLoggedInState = this.isLoggedInSource.asObservable();

  constructor(private http: HttpClient) {}

  //  on success set localstorage
  authenticateUser(email: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        })
      };
    return this.http.post('http://dev.api.launc.space/users/authenticate', {email, password}, httpOptions);
  }

  updateState(isLoggedIn: boolean) {
    this.isLoggedInSource.next(isLoggedIn);
  }
}
