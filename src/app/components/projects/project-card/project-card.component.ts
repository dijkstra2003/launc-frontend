import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() projectName: string;
  @Input() projectDescription: string;
  @Input() projectImage: string;

  ngOnInit() {
  }

}
