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
  }

  getCampaign() {
    const id = +this.route.snapshot.paramMap.get('campaignId');
    const obj = this.campaignsService.getSingleCampaign().subscribe(campaignArray => {
      campaignArray.find(response => response === id);
    });
    return obj;
  }
}
