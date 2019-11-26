import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

  faSearch = faSearch;
  @ViewChild('autofocus', {static: false}) autofocus: ElementRef;
  @Output() ngmodel = new EventEmitter;  
  constructor() { }

  ngOnInit() {

  }

  change() {
    console.log('bah');
  }

  ngAfterViewInit(): void {
    this.autofocus.nativeElement.focus();
  }

}
