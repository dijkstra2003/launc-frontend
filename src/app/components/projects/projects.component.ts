import { Component, OnInit } from '@angular/core';
import {PROJECTS} from './projects.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects = PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
