import { CampaignsPageService } from './../campaigns-page/campaigns-page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  campaign;
  
  constructor(
    private route: ActivatedRoute,
    private campaignsService: CampaignsPageService,
    private location: Location) { }

  ngOnInit() {
    this.getCampaign();
    console.log(this.campaign);
  }

  getCampaign() {
    const id = +this.route.snapshot.paramMap.get('campaignId');
    this.campaignsService.getSingleCampaign().subscribe(campaignResponse => {
      const campaignArray = [];
      campaignArray.push(campaignResponse);
      console.log(campaignArray[0]);
      this.campaign = campaignArray[0].filter(response => response === id);
    });
  }
}
