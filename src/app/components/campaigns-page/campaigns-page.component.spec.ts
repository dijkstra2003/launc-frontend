import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CampaignCardComponent } from './campaign-card/campaign-card.component';
import { CampaignsPageComponent } from './campaigns-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PaymentComponent } from '../payment/payment.component';

describe('CampaignsPageComponent', () => {
  let component: CampaignsPageComponent;
  let fixture: ComponentFixture<CampaignsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        CampaignsPageComponent,
        CampaignCardComponent,
        PaymentComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
