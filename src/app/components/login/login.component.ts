import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('.background-img__btn').addEventListener('click', function() {
      document.querySelector('.login').classList.toggle('s--signup');
    });
  }
  
  
}
