import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  projects = [
    {
      title: 'first project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    },
    {
      title: 'second project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    },
    {
      title: 'third project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    },
    {
      title: 'fourth project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    },
    {
      title: 'first project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    },
    {
      title: 'second project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    },
    {
      title: 'third project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    },
    {
      title: 'fourth project',
      description: 'a random description for a project',
      logoSrc: '/assets/logo-los.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
