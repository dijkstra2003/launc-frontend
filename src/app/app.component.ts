import { Component, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavigationComponent } from './components/shared/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'launc-frontend';
  route = environment.apiHostname;
}
