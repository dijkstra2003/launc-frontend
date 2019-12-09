import { CampaignPageService } from './campaign-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns-page',
  templateUrl: './campaigns-page.component.html',
  styleUrls: ['./campaigns-page.component.scss']
})
export class CampaignsPageComponent implements OnInit {

  campaigns;

  constructor(campaignService: CampaignPageService) {
    this.campaigns = campaignService.campaignList
   }

  ngOnInit() {
  }

}
