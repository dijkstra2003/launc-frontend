import { CampaignsPageService as CampaignsPageService } from './campaigns-page.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns-page',
  templateUrl: './campaigns-page.component.html',
  styleUrls: ['./campaigns-page.component.scss']
})
export class CampaignsPageComponent implements OnInit {

  campaigns;

  constructor(private campaignsPageService: CampaignsPageService) {}

  ngOnInit() {
    this.campaignsPageService.getCampaigns().subscribe(response => {
      this.campaigns = response;
    });
  }
}
