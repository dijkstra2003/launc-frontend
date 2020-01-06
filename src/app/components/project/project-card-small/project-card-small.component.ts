import { Component, OnInit, Input } from '@angular/core';
import { Campaign } from 'src/app/models/Campaign';

@Component({
  selector: 'app-project-card-small',
  templateUrl: './project-card-small.component.html',
  styleUrls: ['./project-card-small.component.scss']
})
export class ProjectCardSmallComponent implements OnInit {
  @Input() selectedCampaign = {} as Campaign;

  constructor() { }

  ngOnInit() {
  }

}
