import { Component, OnInit, Pipe } from '@angular/core';
import { Campaign } from 'src/app/models/Campaign';
import { Observable } from 'rxjs';
import { CampaignPageService } from '../campaigns-page/campaign-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  campaigns: Observable<Campaign[]>;

  constructor(private campaignService: CampaignPageService) {}

  ngOnInit() {
    this.campaigns = this.campaignService.getCampaigns();
  }
}
