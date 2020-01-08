import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignPageService } from '../campaign-page.service';
import { Campaign } from 'src/app/models/Campaign';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { Observable } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})

export class CampaignDetailsComponent implements OnInit {

  selectedCampaign: Campaign;
  dataLoaded = false;
  isLoggedIn: Observable<boolean>;
  progress;

  constructor(
    private activatedRoute: ActivatedRoute,
    private campaignService: CampaignPageService,
    private authenticationService: AuthenticationService
    ) {
    this.getSelectedCampaign();
    this.isLoggedIn = this.authenticationService.isLoggedInState;
  }

  getSelectedCampaign() {
    const campaignIdFromUrl = +this.activatedRoute.snapshot.paramMap.get('id');
    this.campaignService.getCampaignById(campaignIdFromUrl).subscribe(result => {
      this.selectedCampaign = result;
      this.dataLoaded = true;
      this.progress = this.selectedCampaign.goal.progress.toString();
    });
    sessionStorage.setItem('selectedCampaign', campaignIdFromUrl.toString());
  }

  getPercentage() {
    return 50;
  }

  ngOnInit() {
  }
}
