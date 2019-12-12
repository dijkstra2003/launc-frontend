import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'launc-frontend';
  route = environment.apiHostname;

  constructor(
    private authenticationService: AuthenticationService,
  ){}
  
  ngOnInit(): void {
    if(localStorage.getItem("JwtToken") !== null) {
      this.authenticationService.updateState(true);
    } else {
      this.authenticationService.updateState(false);
    }
  }
}
