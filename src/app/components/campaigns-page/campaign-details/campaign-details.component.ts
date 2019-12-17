import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignPageService } from '../campaign-page.service';
import { Campaign } from 'src/app/models/Campaign';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  selectedCampaign: Observable<Campaign>;

  constructor(private activatedRoute: ActivatedRoute, private campaignService: CampaignPageService) { }

  getSelectedCampaign() {
    const campaignIdFromUrl = +this.activatedRoute.snapshot.paramMap.get('id');
    this.selectedCampaign = this.campaignService.getCampaignById(campaignIdFromUrl);
  }

  ngOnInit() {
  }

}
