import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

export interface User {
  token?: string;
  firstName: string;
  lastName: string;
  username: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient) { }

  @ViewChild('email', {static: false}) email: ElementRef;

  login(username, password) {
    this.authenticationService.authenticateUser(username, password).subscribe(success => {
      localStorage.setItem('token', success.jwtToken);
      localStorage.setItem('username', success.name);
      this.authenticationService.updateState(true);
      //  TODO - redirect
    }, error => {

    });
  }

  ngOnInit() {
    document.querySelectorAll('.js-target').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelector('.login').classList.toggle('s--signup');
      });
    });
  }

  ngAfterViewInit(): void {
    this.email.nativeElement.focus();
  }
}
