import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  login(username, password) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.post('http://localhost:20450/users/authenticate', {username, password}, httpOptions).subscribe(e => {
      console.log(e);
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
    document.querySelectorAll('.js-target').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelector('.login').classList.toggle('s--signup');
      });
    });
  }
}
