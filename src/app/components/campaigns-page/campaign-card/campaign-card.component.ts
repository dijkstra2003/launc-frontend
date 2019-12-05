import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {
    
  @Input() campaignName: string;
  @Input() campaignDescription: string;
  @Input() campaignImage: string;
  @Input() campaignUrl: string;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
