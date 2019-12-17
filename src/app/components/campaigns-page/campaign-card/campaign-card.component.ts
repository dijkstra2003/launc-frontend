import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/models/Campaign';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  @Input() campaign: Campaign;
  

  constructor(private router: Router) {

  }

  navigateToCampaign() {
    this.router.navigate(['campaign', 1]);
  }

  ngOnInit() {
  }

}
