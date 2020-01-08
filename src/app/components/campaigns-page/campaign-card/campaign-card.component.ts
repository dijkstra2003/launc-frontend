import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from 'src/app/models/Campaign';
import { CampaignsPageComponent } from '../campaigns-page.component';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {

  @Input() selectedCampaign = {} as Campaign;

  constructor(private router: Router) {
  }

  navigateToCampaign() {
    this.router.navigate(['campaign/by/', this.selectedCampaign.id]);
  }

  ngOnInit() {
  }

}
