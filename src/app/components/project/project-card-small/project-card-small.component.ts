import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card-small',
  templateUrl: './project-card-small.component.html',
  styleUrls: ['./project-card-small.component.scss']
})
export class ProjectCardSmallComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() logoSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
