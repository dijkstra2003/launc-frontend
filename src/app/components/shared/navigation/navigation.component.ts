import { Component, OnInit, NgModule } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})

export class NavigationComponent implements OnInit {

  faBars = faBars;
  isLoggedIn: Observable<boolean>;
  userName: string;

  constructor(private authenticationService: AuthenticationService) {
    this.isLoggedIn = this.authenticationService.isLoggedInState;
    this.userName = localStorage.getItem('name');
  }

  //  not for future use just to start.
  logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('JwtToken');

    this.authenticationService.updateState(false);
  }

  ngOnInit() {
  }
}
