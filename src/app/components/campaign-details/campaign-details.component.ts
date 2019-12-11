import { CampaignsPageService } from './../campaigns-page/campaigns-page.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {CampaignModel} from 'src/app/models/campaign-model'


@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  campaignModel : CampaignModel;
  
  constructor(
    private route: ActivatedRoute,
    private campaignsService: CampaignsPageService,
    private location: Location) { }

  ngOnInit() {
    this.getCampaign();
  }

  getCampaign(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.campaignsService.<<<< HEAD
importmign().subscribe(responseDb =>{ 
      const responsePlaceholder = [];
      responsePlaceholder.push(responseDb);
      responsePlaceholder.find(campaign =>  {this.campaignModel === campaign);
  });
  }
}
