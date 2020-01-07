import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CampaignPageService } from '../campaign-page.service';
import { Campaign } from 'src/app/models/Campaign';
import { Goal } from 'src/app/models/Goal';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  campaignForm: FormGroup;

  constructor(private fb: FormBuilder, private campaignService: CampaignPageService) { }

  createCampaign() {
    const newCampaign = {
      campaignName: this.campaignForm.get('campaignName').value,
      campaignDescription: this.campaignForm.get('campaignDescription').value,
      campaignGoal: [{
        goalStart: this.campaignForm.get('goalStart').value,
        goalEnd: this.campaignForm.get('goalEnd').value,
        minAmount: this.campaignForm.get('minAmount').value
      }]
    } as Campaign;
    this.campaignService.createCampaign(newCampaign).subscribe(
      result => console.log(result),
      error => console.error(error)
    );
  }

  buildForm() {
    this.campaignForm = this.fb.group({
      campaignName: new FormControl(),
      campaignDescription: new FormControl(),
      goalStart: new FormControl(),
      goalEnd: new FormControl(),
      minAmount: new FormControl()
    });
  }

  ngOnInit() {
    this.buildForm();
  }

}
