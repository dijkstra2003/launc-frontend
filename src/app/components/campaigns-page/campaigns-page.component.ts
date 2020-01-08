import { CampaignPageService } from './campaign-page.service';
import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/models/Campaign';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-campaigns-page',
  templateUrl: './campaigns-page.component.html',
  styleUrls: ['./campaigns-page.component.scss']
})
export class CampaignsPageComponent implements OnInit {

  searchWord;
  campaignsList: BehaviorSubject<Campaign[]>;
  campaignsList_1: Observable<Campaign[]>;


  constructor(
    private campaignService: CampaignPageService,
    private activatedRoute: ActivatedRoute,
    ) {
      this.campaignsList = new BehaviorSubject([]);
    }

  ngOnInit() {
    this.searchWord = this.activatedRoute.snapshot.paramMap.get('searchWord');

    if(!this.searchWord) {
      this.campaignsList_1 = this.campaignService.getCampaigns();
    } else {
      this.campaignsList_1 = this.campaignService.getCampaigns().pipe(map(campaigns => { 
        return campaigns = campaigns.filter(
          e => e.campaignName.toLowerCase().includes(this.searchWord.toLowerCase())
        )})
      );
    }
  }
}
