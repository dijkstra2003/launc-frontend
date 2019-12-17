import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly REGISTER_USER_URL = environment.apiHostname +  'register';

  constructor(private http: HttpClient) { }

  registerUser(newUser: User) {
    return this.http.post<User>(this.REGISTER_USER_URL, { newUser });
  }
}
