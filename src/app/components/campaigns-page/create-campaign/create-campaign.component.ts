import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CampaignPageService } from '../campaign-page.service';
import { Campaign } from 'src/app/models/Campaign';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  campaignForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private campaignService: CampaignPageService,
    private router: Router) { }

  createCampaign() {
    const newCampaign = {
      CampaignName: this.campaignForm.get('campaignName').value,
      CampaignDescription: this.campaignForm.get('campaignDescription').value,
      CampaignUrl: this.campaignForm.get('campaignUrl').value,
      Goal: {
        GoalStart: this.campaignForm.get('goalStart').value,
        GoalEnd: this.campaignForm.get('goalEnd').value,
        MinAmount: this.campaignForm.get('minAmount').value
      }
    } as Campaign;
    console.log(newCampaign);
    this.campaignService.createCampaign(newCampaign).subscribe(
      // campaign => this.router.navigate(['/campaign/by/', campaign.id]),
      error => console.error(error)
    );
  }

  buildForm() {
    this.campaignForm = this.fb.group({
      campaignName: new FormControl(),
      campaignDescription: new FormControl(),
      goalStart: new FormControl(),
      goalEnd: new FormControl(),
      minAmount: new FormControl(),
      campaignUrl: new FormControl()
    });
  }

  ngOnInit() {
    this.buildForm();
  }

}
