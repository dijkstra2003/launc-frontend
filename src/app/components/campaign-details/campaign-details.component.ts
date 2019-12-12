import { CampaignsPageService } from './../campaigns-page/campaigns-page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { stringify } from 'querystring';


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
    let campaignObject: any;

    campaignObject = this.campaignsService.getSingleCampaign().subscribe((campaignResponse) => {
      let campaignArray = [];
      campaignArray.push(campaignResponse);
      //find and return campaign object when id matches
      return campaignArray[0].find((response) => response.id === id);
    });
    console.log(campaignObject);
    //return a campaign object
    return campaignObject;
  }
}
