import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailsComponent } from './campaign-details.component';
import { CampaignCardComponent } from '../campaign-card/campaign-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaymentComponent } from '../../payment/payment.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


describe('CampaignDetailsComponent', () => {
  let component: CampaignDetailsComponent;
  let fixture: ComponentFixture<CampaignDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatProgressBarModule
      ],
      declarations: [
        CampaignDetailsComponent,
        CampaignCardComponent,
        PaymentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
