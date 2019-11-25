import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @ViewChild("email", {static: false}) email: ElementRef;

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
