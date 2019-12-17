import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  @Input() campaignName: string;
  @Input() campaignDescription: string;
  @Input() campaignImage: string;
  @Input() campaignUrl: string;

  constructor(private router: Router) {
  }

  navigateToCampaign() {
    this.router.navigate(['campaign', 1]);
  }

  ngOnInit() {
  }

}
