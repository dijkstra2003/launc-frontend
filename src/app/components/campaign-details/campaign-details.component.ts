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
  
  constructor(
    private route: ActivatedRoute,
    private campaignsService: CampaignsPageService,
    private location: Location) { }

  ngOnInit() {
    
  }

}
