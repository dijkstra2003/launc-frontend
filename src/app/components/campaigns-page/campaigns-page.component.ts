import { CampaignPageService } from './campaign-page.service';
import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/models/Campaign';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-campaigns-page',
  templateUrl: './campaigns-page.component.html',
  styleUrls: ['./campaigns-page.component.scss']
})
export class CampaignsPageComponent implements OnInit {

  campaignsList: Observable<Campaign[]>;

  constructor(private campaignService: CampaignPageService) {}

  ngOnInit() {
    this.campaignsList = this.campaignService.getCampaigns();
  }
}
