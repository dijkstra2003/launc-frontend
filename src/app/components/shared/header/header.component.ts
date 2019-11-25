import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  @ViewChild("autofocus", {static: false}) autofocus: ElementRef;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();    
  }

}
