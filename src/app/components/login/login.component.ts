import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import {Router } from "@angular/router";

export interface User {
  name: string;
  jwtToken: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private router: Router,
    ) {}

  @ViewChild('email', {static: false}) email: ElementRef;

  login(email, password) {
    this.authenticationService.authenticateUser(email, password).subscribe(success => {
      const response: User = success as User;

      localStorage.setItem('JwtToken', response.jwtToken);
      localStorage.setItem('name', response.name);

      this.authenticationService.updateState(true);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }

  register(name, email, password) {
    this.authenticationService.registerUser(name, email, password).subscribe(() => {
      this.login(email, password);
    }, error => {
      console.log(error);
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
