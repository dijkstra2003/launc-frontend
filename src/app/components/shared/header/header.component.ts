import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  faSearch = faSearch;

  @ViewChild('autofocus', {static: false}) autofocus: ElementRef;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();
  }

  navigateAndSearchProject(searchWord: string) {
    this.router.navigate(['projects/search/', searchWord]);
  }
}
