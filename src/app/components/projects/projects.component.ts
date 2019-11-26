import { Component, OnInit } from '@angular/core';
import {Project} from './Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  project: Project = {
    id: 1,
    ownerId: 10,
    name: 'Project kanban',
    description:'It is a kanban board version two'
  };

  constructor() { }

  ngOnInit() {
  }

}
