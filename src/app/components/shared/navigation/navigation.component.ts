import { Component, OnInit, NgModule } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit() {
  }
}
