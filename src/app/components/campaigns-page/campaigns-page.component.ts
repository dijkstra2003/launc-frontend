import { CampaignPageService } from './campaign-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns-page',
  templateUrl: './campaigns-page.component.html',
  styleUrls: ['./campaigns-page.component.scss']
})
export class CampaignsPageComponent implements OnInit {

  campaigns;

  constructor(private campaignService: CampaignPageService) {}

  ngOnInit() {
    this.campaignService.getCampaigns().subscribe(response => {
      this.campaigns = response;
    });
  }
}
